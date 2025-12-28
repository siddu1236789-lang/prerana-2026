import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminBrochure() {
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);
  const saveBrochure = useMutation(api.documents.saveBrochure);
  const currentBrochureUrl = useQuery(api.documents.getBrochure);
  
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    try {
      // 1. Get upload URL
      const postUrl = await generateUploadUrl();

      // 2. Upload file
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      
      if (!result.ok) throw new Error("Upload failed");
      const { storageId } = await result.json();

      // 3. Save storage ID
      await saveBrochure({ storageId, name: file.name });
      
      toast.success("Brochure uploaded successfully!");
      setFile(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload brochure");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload Sponsorship Brochure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentBrochureUrl && (
            <div className="p-4 border rounded-md bg-muted/50">
              <p className="text-sm font-medium mb-2">Current Brochure:</p>
              <a 
                href={currentBrochureUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm break-all"
              >
                View Current PDF
              </a>
            </div>
          )}

          <form onSubmit={handleUpload} className="space-y-4">
            <Input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              disabled={isUploading}
            />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={!file || isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Brochure"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
