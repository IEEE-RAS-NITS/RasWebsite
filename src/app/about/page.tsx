"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div 
      className="min-h-screen flex flex-col text-white selection:bg-[#00629B]"
style={{ background: "linear-gradient(90deg, #A35928 0%, #700B4F 94%)" }}
    >
      <Header />

      <main className="flex-grow mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* HERO */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded border border-[#00629B]/30 bg-[#00629B]/5 px-3 py-1"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#00629B]">
              Advancing Technology for Humanity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black tracking-tighter md:text-8xl uppercase italic leading-[0.8]"
          >
            IEEE RAS <br />
            <span className="text-[#CFC4C5]">NIT SILCHAR</span>
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-200"
          >
            The IEEE Robotics and Automation Society (RAS) Student Branch
            Chapter at NIT Silchar is a dynamic technical community dedicated to
            advancing robotics, automation, and intelligent systems. As part of
            the global IEEE network and the IEEE Silchar Subsection, the chapter
            bridges the gap between theoretical learning and practical
            engineering through hands-on experiences, innovation, and
            collaboration. The chapter organizes a wide range of activities,
            including conferences, workshops, distinguished lectures, and
            competitions, providing students with real-world exposure to
            emerging technologies. Through interactions with experts and
            participation in technical events, members gain insights into areas
            such as artificial intelligence, autonomous systems, and advanced
            robotics. By encouraging innovation, teamwork, and interdisciplinary
            collaboration, the chapter empowers students to develop
            problem-solving skills and build impactful solutions, while
            contributing to the growth of the technical ecosystem in the
            North-East region of India.
          </motion.p>
        </section>

        {/* MISSION & VISION */}
        <div className="space-y-32 mb-40">
          <section>
            <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-8 uppercase tracking-[0.2em] text-3xl italic">
              Our Mission
            </motion.h2>
            <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-sm p-10 md:p-14 rounded-2xl border border-white/10 hover:border-[#00629B]/30 transition shadow-2xl">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                Our mission is to advance the field of robotics and automation by fostering 
                the development and exchange of scientific and technological knowledge within 
                the student community. We aim to create an environment where students can 
                effectively bridge the gap between theoretical concepts and practical 
                implementation through hands-on learning, technical workshops, and 
                collaborative projects.
                {"\n\n"}
                By providing access to modern tools, industry insights, and research-oriented 
                activities, we empower students to build strong technical foundations and 
                develop innovative problem-solving abilities. The chapter actively encourages 
                exploration in emerging domains such as artificial intelligence, autonomous 
                systems, biomedical robotics, and intelligent automation.
                {"\n\n"}
                Beyond technical learning, our mission also focuses on leadership, teamwork, 
                and professional development, ensuring students are well-prepared for real-world 
                challenges and interdisciplinary collaboration.
              </p>
            </motion.div>
          </section>

          <section>
            <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-8 uppercase tracking-[0.2em] text-3xl italic text-right">
              Our Vision
            </motion.h2>
            <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-sm p-10 md:p-14 rounded-2xl border border-white/10 hover:border-[#00629B]/30 transition shadow-2xl">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-line text-right">
                Our vision is to establish a leading and globally recognized student-driven 
                robotics community that serves as a hub for innovation, research, and 
                technological excellence. We aspire to create a platform where students are 
                inspired to think creatively, explore interdisciplinary domains, and push the 
                boundaries of robotics and automation.
                {"\n\n"}
                We envision building a strong ecosystem connecting academia, industry, and 
                research, enabling students to gain exposure to real-world applications and 
                global technological advancements. Through impactful events, workshops, and 
                collaborations, we aim to position our chapter as a center of excellence in 
                the North-East region of India.
                {"\n\n"}
                Our long-term vision is to empower students to develop technologies that 
                address real-world challenges and contribute meaningfully to society through 
                innovation and engineering excellence.
              </p>
            </motion.div>
          </section>
        </div>

        {/* CONFERENCES */}
        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Conferences & Major Events
          </motion.h2>

          <div className="grid gap-12">
            {[
              { 
                name: "NE-IECCE 2025", 
                date: "JULY 2025",
                image: "/ras-conf.png",
                desc: "The inaugural flagship event organized by IEEE IAS Joint Chapter in collaboration with EE Dept, NIT Silchar. Focusing on advancements in sustainable energy conversion, transportation electrification, EVs, microgrids, and AI integration." 
              },
              { 
                name: "IEEE SILCON 2025", 
                date: "NOV 2025",
                image: "/ras-conf.png",
                desc: "The 4th edition of the International Conference of the IEEE Silchar Subsection. Inaugurated by Prof. (Dr.) Bhim Singh (IIT Delhi), it serves as a platform for global academic exchange across engineering and applied sciences." 
              },
              { 
                name: "ROBOGENESIS 2025", 
                date: "SEPT 2025",
                image: "/ras-conf.png",
                desc: "A flagship orientation program featuring faculty insights and expert talks from Monash University, introducing the Batch of 2029 to robotics, AI, and the mission of advancing technology for humanity." 
              }
            ].map((event, i) => (
              <EventCard key={i} {...event} />
            ))}
          </div>
        </section>

        {/* WORKSHOPS & PROGRAMS */}
        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Workshops & Programs
          </motion.h2>

          <div className="grid gap-12">
            {[
              { 
                name: "WIE Workshop", 
                date: "DEC 2025", 
                image: "/ras-conf.png",
                desc: "Speaker: Dr. Alakananda Rao & Experts from IITs/NITs. 5-Day Online International Workshop exploring emerging technologies for a smarter future, nanorobotics, sensor design, and AI in healthcare." 
              },
              { 
                name: "RASEDCD", 
                date: "OCT 2025", 
                image: "/ras-conf.png",
                desc: "Speaker: Experts from IIT Roorkee, BITS Pilani & GlobalFoundries. 5-Day Workshop on Semiconductor and Emerging Devices for Chip Design, focusing on Cryo-CMOS, nanosheet FETs, and multi-gate transistors." 
              },
              { 
                name: "VAJRA Series", 
                date: "AUG 2025", 
                image: "/ras-conf.png",
                desc: "Speaker: Prof. Sembiam R. Rengarajan (CSU Northridge, USA). General Public Lecture series on Artificial Neural Network modeling, antenna technology, and the legacy of Michael Faraday." 
              },
              { 
                name: "CAD Workshop", 
                date: "JULY 2025", 
                image: "/ras-conf.png",
                desc: "Speaker: Amandip Dutta. Hands-on engineering workshop on CAD design essentials, from basic sketching to complex 3D modeling for robotics." 
              }
            ].map((item, i) => (
              <EventCard key={i} {...item} />
            ))}
          </div>
        </section>

        {/* DISTINGUISHED LECTURES */}
        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Distinguished Tech Speaker Sessions
          </motion.h2>

          <div className="grid gap-12">
            {[
              { 
                name: "Prof. Tapomayukh Bhattacharjee", 
                date: "CORNELL UNIV.", 
                image: "/ras-conf.png",
                desc: "Physical Intelligence for Physical Care: Towards Stakeholder-Informed Caregiving Robots in the Real World. Transforming robotics for mobility limitations." 
              },
              { 
                name: "Dr. Yogesh Pratap Singh", 
                date: "IISC BANGALORE", 
                image: "/ras-conf.png",
                desc: "Parallel Manipulators: Advancing precision engineering from spacecraft micro-vibration control to medical solutions for complex tibial fractures." 
              },
              { 
                name: "Prof. Steve LaValle", 
                date: "UIUC / OULU", 
                image: "/ras-conf.png",
                desc: "Fundamental Challenges in Robotics and Embodied AI. Insights from the originator of the Rapidly-exploring Random Tree (RRT) algorithm." 
              },
              { 
                name: "Dr. Avijit Banerjee", 
                date: "LULEÅ UNIV.", 
                image: "/ras-conf.png",
                desc: "Resilient Autonomy Beyond Earth: Scalable Robotic Foundations for Planetary Colonization and Orbital Infrastructure." 
              },
              { 
                name: "Prof. Fumihito Arai", 
                date: "UNIV. OF TOKYO", 
                image: "/ras-conf.png",
                desc: "Robotics and Automation in the Microscopic World for Biomedical Innovations. Single-cell manipulation and micro-mechatronics." 
              }
            ].map((talk, i) => (
              <EventCard key={i} {...talk} />
            ))}
          </div>
        </section>

        {/* INNOVATION ACTIVITIES */}
        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Innovation Activities
          </motion.h2>

          <div className="grid gap-12">
            {[
              { 
                name: "Robot Concept Design", 
                date: "COMPETITION", 
                image: "/ras-conf.png",
                desc: "Winner: Team Solar Sprouts. Poster Making Competition focusing on originality, problem-solving relevance, and envisioning technologies for real-world applications." 
              },
              { 
                name: "Drone & Green Tech", 
                date: "DEVELOPMENT", 
                image: "/ras-conf.png",
                desc: "Drone design, surveillance challenges, and sustainable robotics concept development to foster creativity and competitive engineering challenges." 
              },
              { 
                name: "Student Research", 
                date: "RESEARCH", 
                image: "/ras-conf.png",
                desc: "Active participation in interdisciplinary projects and research initiatives within the NIT Silchar technical ecosystem." 
              }
            ].map((activity, i) => (
              <EventCard key={i} {...activity} />
            ))}
          </div>
        </section>

        {/* COMMUNITY, IMPACT & LEADERSHIP */}
        <section className="mb-20">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Community, Impact & Leadership
          </motion.h2>

          <div className="grid gap-6">
            <motion.div 
              {...fadeIn} 
              className="group flex flex-col md:flex-row md:items-start gap-6 p-10 rounded-xl bg-white/5 backdrop-blur-sm border-l-4 border-[#00629B]/30 hover:border-[#00629B] transition-all"
            >
              <div className="min-w-[280px]">
                 <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#00629B] block mb-1">Impact</span>
                 <h3 className="text-2xl font-bold text-white group-hover:text-[#00629B] transition-colors uppercase tracking-tight leading-none">Community <br/> Ecosystem</h3>
              </div>
              <p className="text-gray-200 text-lg flex-1 leading-relaxed border-l border-white/10 pl-0 md:pl-6">
                IEEE RAS NIT Silchar serves as a cornerstone for technological growth in North-East India, building a robust ecosystem where students, researchers, and mentors converge. Beyond simple technical skill acquisition, we focus on high-impact initiatives that empower our members to bridge the gap between academic theory and socially-relevant engineering solutions.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              className="group flex flex-col md:flex-row md:items-center gap-6 p-10 rounded-xl bg-white/5 backdrop-blur-sm border-l-4 border-[#00629B]/30 hover:border-[#00629B] transition-all shadow-xl"
            >
              <div className="min-w-[280px]">
                 <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#00629B] block mb-1">Executive</span>
                 <h3 className="text-2xl font-bold text-white group-hover:text-[#00629B] transition-colors uppercase tracking-tight leading-none">Leadership <br/> Council</h3>
              </div>
              <div className="flex-1 border-l border-white/10 pl-0 md:pl-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-widest block">Chairman</span>
                    <span className="text-white text-xl font-black uppercase tracking-tight">Bisal Prasad</span>
                    <span className="text-[#00629B] text-xs font-bold block uppercase tracking-tighter">IEEE Silchar Subsection</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-widest block">Faculty In-Charge</span>
                    <span className="text-white text-xl font-black uppercase tracking-tight">Dr. Vipin Chandra Pal</span>
                    <span className="text-[#00629B] text-xs font-bold block uppercase tracking-tighter">RAS SBC NIT Silchar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}