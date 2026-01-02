import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Data Definitions
const leadership = [
  { name: "M. Thousheer", role: "President", image: "/images/team/thoushier.jpg" },
  { name: "Honalu K.G", role: "Vice President", image: "/images/team/honalu.jpg" },
  { name: "Mokshagna", role: "Vice President", image: "/images/team/moksha.jpg" },
];

const domainTeams = [
  {
    name: "Security",
    roles: [
      { title: "Head", members: [{ name: "M.V. Sai Teja", image: "/images/team/sai.jpg" }] },
      { title: "Lead", members: [{ name: "Jaswanth Koduri", image: "/images/team/jashwanth.jpg" }, { name: "Spoorthi S", image: "/images/team/spoorthi.jpg" }] },
      { title: "Co-Lead", members: [{ name: "K.B. Dhanush Tej", image: "/images/team/dhanush.jpg" }, { name: "Rupesh Koneti", image: "/images/team/roopesh.jpg" }] },
    ]
  },
  {
    name: "Media",
    roles: [
      { title: "Lead", members: [{ name: "G. Sai Krishna", image: "/images/team/sai krishna.jpg" }] },
      { title: "Co-Lead", members: [{ name: "S MD Aasim", image: "/images/team/bade miyya.jpg" }] },
    ]
  },
  {
    name: "Design & Content",
    roles: [
      { title: "Head", members: [{ name: "Venkata Vishnu", image: "/images/team/vishnu.jpg" }] },
      { title: "Lead", members: [{ name: "Dhanunjay", image: "/images/team/leo.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Sohitha", image: "/images/team/sohitha.jpg" }, { name: "Guru Sai", image: "/images/team/guru sai.jpg" }] },
    ]
  },
  {
    name: "Technology",
    roles: [
      { title: "Head", members: [{ name: "D.N.C Teja", image: "/images/team/teja.jpg" }] },
      { title: "Lead", members: [{ name: "Vasavi Gorantala", image: "/images/team/vasavi.jpg" }] },
      { title: "Co-Lead", members: [{ name: "S MD Aasim", image: "/images/team/aasim.jpg" }, { name: "Kandala Pavan", image: "/images/team/pavan.jpg" }] },
    ]
  },
  {
    name: "Events",
    roles: [
      { title: "Head", members: [{ name: "B. Neha Reddy", image: "/images/team/neha.jpg" }] },
      { title: "Lead", members: [{ name: "Rachel Smita", image: "/images/team/rachel.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Lanka Darshini Raj", image: "/images/team/darshani.jpg" }, { name: "P. Yathin Bharadwaj", image: "/images/team/yathin.jpg" }] },
    ]
  },
  {
    name: "Marketing",
    roles: [
      { title: "Head", members: [{ name: "Apurva Mishra", image: "/images/team/apurva.jpg" }] },
      { title: "Lead", members: [{ name: "Manoj Kumar", image: "/images/team/manoj.jpeg" }] },
      { title: "Co-Lead", members: [{ name: "J. Riteesh Reddy", image: "/images/team/Riteesh.jpg" }] },
    ]
  },
  {
    name: "Operations",
    roles: [
      { title: "Head", members: [{ name: "S Ruthish Reddy", image: "/images/team/rutheeish.jpg" }] },
      { title: "Lead", members: [{ name: "P. Joel Michael Son", image: "/images/team/Michael.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Allata Harshita", image: "/images/team/harshitha.jpg" }] },
    ]
  },
  {
    name: "Sponsorship",
    roles: [
      { title: "Head", members: [{ name: "K. Sriniwas", image: "/images/team/sriniwas.jpg" }] },
      { title: "Lead", members: [{ name: "Sumanth Reddy S", image: "/images/team/sumanth.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Srishti Sucklecha", image: "/images/team/srishti.jpg" }] },
    ]
  },
  {
    name: "Hospitality",
    roles: [
      { title: "Head", members: [{ name: "A. Jagadeesh", image: "/images/team/jagadeesh.jpg" }, { name: "Prakruthi V", image: "/images/team/prakruthi.jpg" }] },
      { title: "Lead", members: [{ name: "Prithvi Ganesh", image: "/images/team/Prithvi.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Sri Nandini T", image: "/images/team/nandini.jpg" }, { name: "Vakul Kumar Bayya", image: "/images/team/vakul.jpg" }] },
    ]
  },
  {
    name: "Legal & Documentation",
    roles: [
      { title: "Head", members: [{ name: "Sophiya Sharma", image: "/images/team/sofiya.jpg" }] },
      { title: "Lead", members: [{ name: "Hrishita Rauniyar", image: "/images/team/hrishita.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Unnati Chari", image: "/images/team/unnati.jpg" }] },
    ]
  },
];

const advisoryCommittee = [
  { name: "Dr. Reema Chaudhury", role: "mentor", image: "/images/team/reema.jpg" },
  { name: "Dr. Asha Acharya", role: "Co-mentor", image: "/images/team/asha mam.jpg", subrole: "" },
  { name: "Anitha D", role: "Senior Executive", image: "/images/team/anita mam.jpg" },
  { name: "Arjun Raghu", role: "Senior Executive", image: "/images/team/arjun sir.jpg" },
  { name: "Pranav Amarnath", role: "Senior Executive ", image: "/images/team/pranav sir.jpeg" },
  { name: "Meghana Musku", role: "Senior Executive ", image: "/images/team/meghana mam.png" },
  { name: "Srikanth Basavraj", role: "Senior Executive", image: "/images/team/srikanth sir.jpg" },
  { name: "Rayanka Debnath", role: "Senior Executive", image: "/images/team/rayanka mam.jpg" },
  { name: "Ayush BM", role: "Executive - Visual Content", image: "/images/team/ayush-sir.jpg" },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

export default function Team() {
  // Order domains with priority: Technology, Security, Hospitality, then the rest
  const getOrderedTeams = () => {
    const primary = ["Technology", "Security", "Hospitality"];
    const ordered: typeof domainTeams = [];
    primary.forEach((name) => {
      const found = domainTeams.find((t) => t.name === name);
      if (found) ordered.push(found);
    });
    domainTeams.forEach((t) => {
      if (!primary.includes(t.name)) ordered.push(t);
    });
    return ordered;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-24"
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind Prerana 2026 working hard to make it a memorable experience.
            </p>
          </div>

          {/* Director (Reema) then Manager (Asha) then Advisory Committee */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-secondary">Advisory Committee</h2>
              <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 px-4">
              {/* Reema Mam */}
              {advisoryCommittee.filter(m => m.name.toLowerCase().includes("reema")).map((member, i) => (
                <motion.div key={`reema-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="w-full md:w-1/2">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center items-center py-10 px-6 min-h-[300px]">
                    <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                      <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                        {(member as any).image ? (
                          <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                        ) : (
                          <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                            {getInitials(member.name)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight break-words text-center">
                          {member.name}
                        </CardTitle>
                        <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                          {member.role}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}

              {/* Asha Mam */}
              {advisoryCommittee.filter(m => m.name.toLowerCase().includes("asha")).map((member, i) => (
                <motion.div key={`asha-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="w-full md:w-1/2">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center items-center py-10 px-6 min-h-[300px]">
                    <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                      <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                        {(member as any).image ? (
                          <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                        ) : (
                          <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                            {getInitials(member.name)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight break-words text-center">
                          {member.name}
                        </CardTitle>
                        <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                          {member.role}
                        </p>
                        {(member as any).subrole && (
                          <p className="text-sm text-muted-foreground">{(member as any).subrole}</p>
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            

            {/* Advisory Committee Placeholder + Members */}
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-6 space-y-2">
                <h3 className="text-2xl font-bold"></h3>
                <p className="text-muted-foreground"></p>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Placeholder image for Advisory Committee group photo */}
                {/* removed group-photo placeholder as requested */}

                {/* Members grid */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-center gap-6">
                    {advisoryCommittee.filter(m => !m.name.toLowerCase().includes("reema") && !m.name.toLowerCase().includes("asha")).map((member, index) => (
                      <motion.div key={`adv-${index}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center text-center p-6 bg-muted/5 rounded-xl border border-primary/10 min-h-[300px] justify-between">
                        <Avatar className="w-32 h-32">
                          {/* Advisory members may not have individual images; use fallback initials to maintain consistent size */}
                          {(member as any).image ? (
                            <AvatarImage src={(member as any).image} alt={member.name} className="w-full h-full object-cover object-top" />
                          ) : (
                            <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">{getInitials(member.name)}</AvatarFallback>
                          )}
                        </Avatar>
                        <div className="mt-3">
                          <div className="font-semibold text-lg md:text-xl break-words">{member.name}</div>
                          <div className="text-sm text-muted-foreground uppercase tracking-wide">{member.role}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              </div>

              {/* Leadership Section (moved below Advisory members) */}
              <section className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-secondary">Leadership</h2>
                  <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                  {leadership.map((person, idx) => (
                    <motion.div
                      key={`lead-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center items-center py-10 px-6 min-h-[300px]">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-34 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            {person.image ? (
                              <AvatarImage src={person.image} alt={person.name} className="object-cover object-top" />
                            ) : (
                              <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">{getInitials(person.name)}</AvatarFallback>
                            )}
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight break-words text-center">
                              {person.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {person.role}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            </section>

          {/* Domain Teams Section */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-3xl font-bold text-secondary">Domain Teams</h2>
               <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>

            {/* Heads Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Heads</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
                {getOrderedTeams().map((team) => {
                  const heads = team.roles.find(r => r.title === "Head")?.members || [];
                  return heads.map((member, mIndex) => (
                    <motion.div
                      key={`${team.name}-head-${mIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: mIndex * 0.05 }}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-12 px-4 w-full min-h-[300px]">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            {(member as any).image ? (
                              <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                            ) : (
                              <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                                {getInitials(member.name)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight break-words px-2 text-center">
                              {member.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {team.name}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ));
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            {/* Leads Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Leads</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
                {getOrderedTeams().map((team) => {
                  const leads = team.roles.find(r => r.title === "Lead")?.members || [];
                  return leads.map((member, mIndex) => (
                    <motion.div
                      key={`${team.name}-lead-${mIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: mIndex * 0.05 }}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-12 px-4 w-full min-h-[300px]">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            {(member as any).image ? (
                              <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                            ) : (
                              <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                                {getInitials(member.name)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight break-words px-2 text-center">
                              {member.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {team.name}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ));
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            {/* Co-Leads Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Co-Leads</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
                {getOrderedTeams().map((team) => {
                  const coLeads = team.roles.find(r => r.title === "Co-Lead")?.members || [];
                  return coLeads.map((member, mIndex) => (
                    <motion.div
                      key={`${team.name}-colead-${mIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: mIndex * 0.05 }}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-12 px-4 w-full min-h-[300px]">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            {(member as any).image ? (
                              <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                            ) : (
                              <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                                {getInitials(member.name)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight break-words px-2 text-center">
                              {member.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {team.name}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ));
                })}
              </div>
            </div>
          </section>

          

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}