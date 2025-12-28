import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqData = [
    {
      category: "General",
      value: "general",
      sections: [
        {
          title: "1. Registration & Eligibility",
          items: [
            {
              question: "How do I register for a specific event?",
              answer: "All registrations regarding the competitions, workshops, and star-night passes are handled through an events register page. Select your events within the form and complete payment through GITAM Pay/G-Events."
            },
            {
              question: "Can students from outside GITAM participate?",
              answer: "Yes. External participants are welcome unless an event specifically restricts participation. Such restrictions will be clearly stated on the event's details page."
            },
            {
              question: "What is the deadline for registration?",
              answer: "Registrations remain open only during the official window: 10 December 2025 - 15 Jan 2026. Late entries will not be accepted under any circumstances."
            },
            {
              question: "How do I confirm if my payment was successful?",
              answer: "A confirmation email is sent automatically after a successful transaction. If no email arrives, check your spam folder. If it is still missing, contact prerana@gitam.edu with your registered mobile number."
            },
            {
              question: "Can I register for multiple events?",
              answer: "Yes, participants may register for any number of events, provided schedule conflicts are managed at their own discretion. Event timings will not be adjusted for individual convenience."
            }
          ]
        },
        {
          title: "2. Passes, Tickets & Pricing",
          items: [
            {
              question: "Is there an entry fee for the fest?",
              answer: "Yes. A one-time Prerana Registration Fee is required for all attendees. This fee grants access to: The Prerana festival campus, All open daytime events, and Night Event / Star Night (no separate night-ticket required). Competitions and workshops still require additional, event-specific fees."
            },
            {
              question: "What is the difference between the Prerana Registration Fee and Competition/Workshop Fees?",
              answer: "Prerana Registration Fee: A single one-time payment required for entry to the fest, including night events. You cannot attend the fest without this basic registration. Competition / Workshop Fees: Each domain-specific event (Technical, Cultural, Wellness) has its own separate registration and fee, paid individually through that event's details page. There is no general pass and no separate ticket for the night event."
            },
            {
              question: "How do I collect my passes after registration?",
              answer: "Your digital entry pass is sent to your registered email. Some events may require physical wristbands—if applicable, you will be informed separately."
            },
            {
              question: "Are group discounts available?",
              answer: "Only if officially announced. If no discount is mentioned, none is available."
            },
            {
              question: "Is the registration fee refundable?",
              answer: "No. The one-time festival registration fee and all competition/workshop fees are non-refundable and non-transferable, except if an event is cancelled by the organisers."
            },
            {
              question: "Is the night event included in my registration?",
              answer: "Yes. Once you pay the one-time fest registration fee, you are automatically allowed to attend the night event."
            },
            {
              question: "Do competitions and workshops have separate fees?",
              answer: "Yes. Every domain-specific event has its own independent registration page and fee. Your one-time fest registration does not cover competitions or workshops."
            },
            {
              question: "Can I use my night-event access to enter competitions or workshops?",
              answer: "No. Night-event access comes from the one-time registration fee only. Competitions and workshops require their own fees and registrations."
            }
          ]
        },
        {
          title: "3. Event Rules & Logistics",
          items: [
            {
              question: "Where can I find detailed rules for each event?",
              answer: "Each event's complete rulebook—eligibility, scoring, restrictions, and formatting—is available on that event's dedicated page under /events."
            },
            {
              question: "What time should I arrive before my competition?",
              answer: "Arrive at least 30 minutes before your scheduled reporting time. Late arrivals may be disqualified automatically."
            },
            {
              question: "Can participants bring their own equipment (e.g., instruments, laptops)?",
              answer: "Yes, unless the event's rulebook explicitly prohibits it. Participants are solely responsible for transporting and safeguarding their equipment."
            },
            {
              question: "Where are the changing rooms or preparation areas?",
              answer: "Designated prep areas will be assigned event-wise. Instructions will be communicated through coordinators on the day of the event."
            },
            {
              question: "Will participants receive certificates?",
              answer: "Certificates will be issued as per event policy—either for winners only or for all participants. Check the relevant event page for specifics."
            }
          ]
        },
        {
          title: "4. Campus & General Information",
          items: [
            {
              question: "How do I reach the GITAM Bengaluru campus?",
              answer: "Directions and a map are available on Google Maps. The address is listed clearly on the /contact page."
            },
            {
              question: "Are food stalls available on campus?",
              answer: "Yes. Multiple food stalls and vendors operate during the fest."
            },
            {
              question: "Is Wi-Fi available for participants?",
              answer: "Campus Wi-Fi is restricted. Participants should rely on their own mobile data unless an event grants controlled access."
            },
            {
              question: "Are first-aid facilities available?",
              answer: "Yes. A medical station and trained personnel will be available throughout the fest."
            },
            {
              question: "What are the general conduct rules on campus?",
              answer: "Standard university rules apply—no alcohol, drugs, vandalism, or unauthorised access to restricted zones. Violations result in immediate removal and possible legal action."
            }
          ]
        },
        {
          title: "5. Accommodation & Travel",
          items: [
            {
              question: "Is accommodation available for outstation participants?",
              answer: "Yes. Limited on-campus accommodation is available on a paid basis at ₹700 per night per person. Availability is first-come, first-served. Booking details will be shared on the /events or /register page."
            },
            {
              question: "What items are allowed/not allowed in accommodation rooms?",
              answer: "Allowed: Personal essentials, clothing, laptops, chargers, basic toiletries. Not allowed: Electrical cooking devices, heaters, smoking materials, alcohol, narcotics, or any prohibited items under campus policy."
            },
            {
              question: "Is separate accommodation available for boys and girls?",
              answer: "Yes. Accommodation arrangements follow GITAM University norms and are strictly gender-segregated."
            },
            {
              question: "Can external guests (non-participants) stay in the accommodation?",
              answer: "No. Only registered participants with valid ID and accommodation booking are allowed."
            }
          ]
        },
        {
          title: "6. Safety, Security & ID Verification",
          items: [
            {
              question: "Do I need to carry an ID card?",
              answer: "Yes. A valid college ID is mandatory for entry and verification."
            },
            {
              question: "Are bag checks mandatory?",
              answer: "Yes. Security screening is compulsory for all participants and visitors."
            },
            {
              question: "Are alcohol, cigarettes, or vapes allowed?",
              answer: "Strictly no. Possession or consumption leads to immediate removal and possible disciplinary/legal action."
            },
            {
              question: "Is there a lost-and-found desk?",
              answer: "Yes. A dedicated desk will operate during fest hours. Lost items can also be reported via prerana@gitam.in."
            }
          ]
        },
        {
          title: "7. Photography, Videography & Media Permissions",
          items: [
            {
              question: "Can I record videos or take photographs during the fest?",
              answer: "Yes, for personal use. However, recording during certain performances, workshops, or closed events may be restricted. Follow coordinator instructions."
            },
            {
              question: "Can I bring professional cameras or drones?",
              answer: "Drones are not allowed unless pre-approved. Professional camera use may require media permission from prerana@gitam.edu."
            }
          ]
        },
        {
          title: "8. Transport, Parking & Entry",
          items: [
            {
              question: "Is parking available on campus?",
              answer: "Yes, but slots are limited. Entry is controlled on event days; arrive early to avoid delays."
            },
            {
              question: "Are autos/taxis permitted inside the campus?",
              answer: "Only up to designated drop-off points. Further access is restricted."
            },
            {
              question: "Is there shuttle service for participants?",
              answer: "If offered, details will be communicated through official channels."
            }
          ]
        },
        {
          title: "9. Weather, Delays & Contingencies",
          items: [
            {
              question: "What happens if it rains or weather conditions worsen?",
              answer: "Schedules may be adjusted. Critical events may be shifted indoors or rescheduled. Participants will receive notifications via email/website updates."
            },
            {
              question: "Will refunds be issued if events are delayed due to weather?",
              answer: "No. Weather-related changes do not qualify for refunds."
            }
          ]
        },
        {
          title: "10. Payments & Technical Issues",
          items: [
            {
              question: "What if my payment fails or is stuck during processing?",
              answer: "Do not retry immediately. Wait 10 minutes, check your bank/SMS, then contact prerana@gitam.edu with: Registered mobile number, Transaction ID (if any), and Screenshot (if available)."
            },
            {
              question: "Can I change or edit my registration after paying?",
              answer: "No. Registrations cannot be modified once submitted."
            }
          ]
        }
      ]
    },
    {
      category: "Technical",
      value: "technical",
      sections: [
        {
          title: "1. Registration & Eligibility",
          items: [
            {
              question: "How do I register for technical events?",
              answer: "All technical event registrations must be done through the Official Registration Page. Select your events and complete payment through GITAM Pay/G-Events."
            },
            {
              question: "Can I participate in multiple technical events?",
              answer: "Yes, you may register for any number of competitions/workshops as long as timing conflicts are managed by you."
            },
            {
              question: "Do technical workshops have separate fees?",
              answer: "Yes. Each workshop or competition has its own individual fee listed on the event detail page."
            }
          ]
        },
        {
          title: "2. Event Rules & Participation",
          items: [
            {
              question: "Do I need to bring my own laptop/equipment?",
              answer: "Yes, unless the rulebook states that equipment will be provided."
            },
            {
              question: "Can teams mix departments?",
              answer: "Yes. Technical events are open to all departments unless specified otherwise."
            },
            {
              question: "Are autonomous robots allowed in robotics events?",
              answer: "Only in designated events like Maze Finder (autonomous-specific). Others permit wired/wireless remote-control bots."
            }
          ]
        },
        {
          title: "3. Submission Requirements",
          items: [
            {
              question: "Do I need to submit code before the Hackathon?",
              answer: "No. Pre-built projects are strictly not allowed. Code must be created during the event."
            },
            {
              question: "Is internet access provided during Hackathon?",
              answer: "Limited access for references; no deploying large builds or downloading heavy assets."
            }
          ]
        },
        {
          title: "4. Judging & Prizes",
          items: [
            {
              question: "What is the judging criteria?",
              answer: "Each event page has a detailed criteria list—innovation, functionality, execution, problem-solving, etc."
            },
            {
              question: "Are prizes given per team or per person?",
              answer: "Prizes apply per team, to be divided among the members."
            }
          ]
        },
        {
          title: "5. Disqualification",
          items: [
            {
              question: "What causes disqualification in technical events?",
              answer: "Use of prohibited materials, Pre-built projects (Hackathon), Unsafe robot designs, Tampering with equipment, Misbehavior with judges or volunteers."
            }
          ]
        }
      ]
    },
    {
      category: "Cultural",
      value: "cultural",
      sections: [
        {
          title: "1. Registration & Fees",
          items: [
            {
              question: "Do cultural events require separate fees?",
              answer: "Yes. Each cultural competition has its own registration fee, listed clearly in the rulebook and event page."
            },
            {
              question: "Can I participate in multiple cultural events?",
              answer: "Yes, subject to schedule feasibility."
            },
            {
              question: "Are accompanists allowed?",
              answer: "Yes—allowed for dance and singing as per event rules (non-performing)."
            }
          ]
        },
        {
          title: "2. Music & Performance",
          items: [
            {
              question: "When should I submit my music track?",
              answer: "Tracks must be submitted 1 day prior in .mp3 format. Always carry a backup pen drive."
            },
            {
              question: "Is background music allowed for Beatboxing?",
              answer: "No. Beatboxing is strictly vocal only."
            },
            {
              question: "Do I need to follow classical dress code for classical dance?",
              answer: "Yes. Costume must match the classical art form."
            }
          ]
        },
        {
          title: "3. Rules & Restrictions",
          items: [
            {
              question: "Can I use props for dance?",
              answer: "Only safe, non-dangerous props. Fire, water, powder, petals, and confetti are banned."
            },
            {
              question: "Are vulgar songs or themes allowed?",
              answer: "Strictly no. Violations lead to immediate disqualification."
            },
            {
              question: "Are photography/short-film/reel entries allowed to use copyrighted music?",
              answer: "No. Any copyrighted content = automatic disqualification."
            }
          ]
        },
        {
          title: "4. Judging & Prizes",
          items: [
            {
              question: "How are cultural performances judged?",
              answer: "Criteria include technique, choreography, expression, rhythm, creativity, storytelling, or visual appeal depending on event."
            },
            {
              question: "Are e-certificates provided?",
              answer: "Yes. All cultural participants receive e-certificates."
            }
          ]
        },
        {
          title: "5. Disqualification",
          items: [
            {
              question: "What may lead to disqualification in cultural events?",
              answer: "Exceeding time limit, Vulgar content, Using banned props, Late reporting, Copyright violations (films/reels), Misbehavior."
            }
          ]
        },
        {
          title: "6. Event-Specific Clarifications",
          items: [
            {
              question: "What is the theme for Mono Acting?",
              answer: "\"Switch 9 Emotions into a Story.\""
            },
            {
              question: "What is the reel contest theme?",
              answer: "College Life (30–60 sec)."
            },
            {
              question: "Can bands bring their own equipment?",
              answer: "Yes, but they are responsible for safety and handling."
            }
          ]
        }
      ]
    },
    {
      category: "Wellness",
      value: "wellness",
      sections: [
        {
          title: "1. Registration & Participation",
          items: [
            {
              question: "Are wellness activities free?",
              answer: "Most zones are walk-in. Workshops (like Clay Modelling) may require registration depending on crowd and materials."
            },
            {
              question: "Do I need the one-time Prerana registration to enter wellness zones?",
              answer: "Yes. All Prerana zones require the one-time fest registration fee."
            },
            {
              question: "Are wellness events open to all departments?",
              answer: "Yes. All students can join unless capacity is restricted."
            }
          ]
        },
        {
          title: "2. Activity Rules",
          items: [
            {
              question: "Can I join the Zen Zone anytime?",
              answer: "Yes, it's designed as a walk-in quiet space."
            },
            {
              question: "Is the Treasure Hunt a team event?",
              answer: "Yes—team details will be mentioned on the event page."
            },
            {
              question: "Are materials provided for Art Therapy or Clay Modelling?",
              answer: "Basic materials are provided, but participants may bring personal tools."
            }
          ]
        },
        {
          title: "3. Environment & Safety",
          items: [
            {
              question: "Are the wellness events safe for everyone?",
              answer: "Yes. Activities are monitored by volunteers; high-risk actions are not included."
            },
            {
              question: "Can I take photos inside wellness zones?",
              answer: "Allowed only where stated; some mental-health-oriented booths disallow photography."
            }
          ]
        },
        {
          title: "4. Deliverables & Prizes",
          items: [
            {
              question: "Are there prizes for wellness activities?",
              answer: "Only specific events (e.g., Treasure Hunt) include prizes. Others focus on wellbeing and experience."
            },
            {
              question: "Do participants receive certificates?",
              answer: "Not usually—only certain workshops may provide participation acknowledgements."
            }
          ]
        },
        {
          title: "5. Disqualification",
          items: [
            {
              question: "Can someone be banned from wellness zones?",
              answer: "Yes, for: Misbehavior, Damaging materials, Violating queue discipline, Disrupting silent zones."
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. Here's everything you need to know about Prerana 2026.
            </p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {faqData.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="space-y-6">
                {tab.sections.map((section, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{section.title}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {section.items.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${tab.value}-${index}-${faqIndex}`}>
                          <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}