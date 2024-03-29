<template>
    <div class="row no-gutters">
     <div class="col-md-2">
         <navigation-vertical :pages="pages"/>
     </div>

    <div class="col-md-10" id="scroller"
    ref="content" style="position:relative;height:100vh;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling: touch;">
        <app-header/>
        <page-block v-for="(page, index) in pages"
          v-bind:page="page"
          v-bind:index="index"
          v-bind:key="index"
          class="pl-md-5 px-lg-2 p-sm-3 py-5 p-xs-1"/>
        <app-footer class="mt-0 py-5"/>
      </div>
    </div>
</template>
<script>
import PageBlock from "@/Components/PageBlock.vue";

export default {
  components: {
    PageBlock
  },
  data() {
    return {
      pages: [
        {
          title: "who-we-are",
          text_block: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Who we are",
              text:
                '<p> <a href="https://robotframework.org/">Robot Framework</a> is a generic open source automation framework for acceptance testing, acceptance test driven development (ATDD), and robotic process automation (RPA). It has simple plain text syntax and it can be extended easily with libraries implemented using Python or Java. <br><br><b>Robot Framework Foundation</b> is a non-profit consortium that fosters the growth of Robot Framework. It was founded by companies with a common interest to ensure the development of framework now and in the future. <a href="https://forum.robotframework.org/t/robot-framework-foundation-unfolded/276">Click here if you want to know more.</a></p>'
            }
          }
        },
        {
          title: "what-we-do",
          text_block: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "What we do",
              text:
                "<p>We sponsor the development of Robot Framework with the focus on fixing bugs, reviewing pull requests by the community and making releases. New feature development and sponsoring other projects in the wider Robot Framework ecosystem can also be considered if we are able to collect enough sponsorship money. We also take care of the overall Robot Framework infrastructure including public web sites, email lists and CI servers. Finally, we promote Robot Framework by organizing meetups for users and otherwise. <br> <br>The money for all these activities is collected from <a href='#members'>members</a> as <a href='#how-to-join'>yearly payments. </a></p>"
            }
          }
        },
        {
          title: "how-to-join",
          text_block: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              priceTable: true,
              header: "How to join",
              text:
                "<p> The main benefit of being a member is assuring the future of Robot Framework. A more concrete benefit is that these member companies and organizations are listed here, making their Robot Framework knowledge or usage more visible. <br><br>If the company or organization you represent is interested to join:<br>1) Fill in the following application: <a href='https://forms.gle/devoS2X3jEyqBE1x7' target='blank'>https://forms.gle/devoS2X3jEyqBE1x7</a><br>2) We’ll make a voting according to our rules<br>3) You are added to the webpage and mailing list, when you are accepted<br>4) Welcome to make the world of Open Source and Automation better!<br><br>If you have any questions related to the membership, please send an email to <a href='mailto:robotframework-foundation@googlegroups.com'>robotframework-foundation@googlegroups.com</a> and we will get back to you.<br><br></b><b>For existing members</b><br>If your contact person changes and for other such matters, please contact <a href='mailto:admin@robotframework.org'>admin@robotframework.org</a></b></p>",
            }
          }
        },
        {
          title: "board",
          text_block: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              header: "Board",
              text:
                `<p>
                  Ismo Aro (Chairman of the Board - <a href="mailto: chair@robotframework.org">contact</a>)<br>
                  René Rohner (Vice Chairman of the Board)<br>
                  Katri Ordning (Secretary)<br>
                  Antti Karjalainen<br>
                  Jani Haapala<br>
                  Mikko Korpela<br>
                  Hanna Saari<br><br>
                  Treasurer: Miikka Salonen
                </p>`
            }
          }
        },
        {
          title: "Members",
          text_block: true,
          tab_box: false,
          feature_box: false,
          user_box: true,
          data: {
            text: {
              header: "Members",
              text:
                '<p> Robot Framework Foundation members. </p>'
            },
            users: [
              {
                title: "Aito Intelligence",
                href: "https://aito.ai/rpa/",
                img: require("@/assets/img/users/aito.png"),
                text:
                  "Aito provides predictions for intelligent automation. Robot software developers can use Aito’s machine learning faster and cost effectively to add intelligence to their workflows. Aito combines a database and machine learning to run together, removing loads of burdens of traditional machine learning projects."
              },
              {
                title: "Aktia",
                href: "https://www.aktia.fi/",
                img: require("@/assets/img/users/aktia.png"),
                text:
                  "Aktia is a Finnish asset manager, bank and life insurer that has been creating wealth and well-being from one generation to the next already for 200 years. We serve our customers through digital channels everywhere and face-to-face in our offices in the Helsinki region as well as in Oulu, Tampere, Turku and Vaasa regions. Funds in our awarded asset management are sold also internationally to institutional clients. We employ approximately 800 people around Finland. In Aktia Robot Framework is used for test automation to guarantee the quality we deliver to our customers."
              },
              {
                title: "Botlabs",
                href: "https://botlabs.fi/en/home/",
                img: require("@/assets/img/users/Botlabs.jpg"),
                text:
                  "Botlabs provides your company with modern software robotics and digitalization services. We want to humanize people’s work by outsourcing difficult and tedious tasks to robots, giving people time to do what they do best, which is to make decisions and communicate."
              },
              {
                title: "Capgemini",
                href: "https://www.capgemini.com",
                img: require("@/assets/img/users/capgemini.png"),
                text:
                  "Capgemini Netherlands is at the forefront of innovation to address the entire breadth of clients’ opportunities in the evolving world of cloud, digital and platforms. Building on its strong 50-year heritage and deep industry-specific expertise, Capgemini enables organizations to realize their business ambitions through an array of services from strategy to operations."
              },
              {
                title: "Chili",
                href: "https://www.chili.com/",
                img: require("@/assets/img/users/chili.jpg"),
                text:
                  "CHILI is a European Entertainment Company. CHILI has developed the first and only Entertainment Centred Marketplace, which is a unique experience offering cinema and tv series fans:<br>- information and reviews about cinema previews<br>- a geo-localised movie theatrical’s show times<br>- all the new releases in digital form, months before pay tv<br>- a catalogue of thousands of digital films, tv series, DVDs and Blu-Ray<br>- the possibility to buy together original merchandising of your favourite Character and - choose gadgets from the films.<br>- and lots more"
              },
              {
                title: "cisco",
                href: "https://www.cisco.com/",
                img: require("@/assets/img/users/cisco.jpg"),
                text:
                  "Cisco’s Customer Experience (CX) supports the testing & validation of Cisco and 3rd party solutions deployed by our customers. This includes Solution Validation Services (SVS) delivered both on Cisco-premise and customer-premise as part of a NetDevOps (CI/CD) process where continuous validation accelerates technology adoption, de-risks IT deployments, changes and upgrades, and ensures complex migrations are transparent."
              },
              {
                title: "comiq",
                href: "http://comiq.fi/",
                img: require("@/assets/img/users/comiq.jpg"),
                text:
                  "Comiq is a Finnish software quality service provider founded in 2003 employing around 60 QA consultants. Our expertise in quality assurance services helps our customers achieve their quality targets for their business critical IT projects."
              },
              {
                title: "DB Schenker",
                href: "https://www.dbschenker.com/global/about/profile",
                img: require("@/assets/img/users/dbchenker.png"),
                text:
                  "DB Schenker is the world’s largest global logistics provider. The company manages IT development across Technology Solution Center hubs located in Warsaw (PL), Nanjing (CN) and Delhi (IN). To keep high quality of delivered IT solutions, we use a RobotFramework to ensure fast and reliable regression testing for both our legacy and agile projects. Our experts ensure transparency in delivered quality and continuously improve their framework."
              },
              {
                title: "deutsche post adress",
                href: "https://www.deutschepost.de/de/p/postadress.html",
                img: require("@/assets/img/users/deutsche post.png"),
                text:
                  "Deutsche Post Adress GmbH & Co. KG is the leading specialist for data quality solutions in Germany. It’s a joint venture between Deutsche Post, the biggest logistical and postal company in the world, and Bertelsmann, the largest media company in Europe. With our services we ensure the success of a company’s dialogue marketing by correcting, updating and managing their addresses. Since 2014 we are using the robot framework for test and process automation."
              },
              {
                title: "digia",
                href: "http://www.digia.com/",
                img: require("@/assets/img/users/digia.jpg"),
                text:
                  "Digia is a IT service company that helps its customers developing and innovating solutions that support business operations together with customers. We adapt to their specific industries to help them develop digital services, manage operations and utilise information, employing nearly 1,000 experts in Finland and Sweden."
              },
              {
                title: "eficode",
                href: "http://www.eficode.fi/",
                img: require("@/assets/img/users/eficode.jpg"),
                text:
                  "Eficode is the leading DevOps company in Europe, driving the DevOps and Agile movement and building the future of software development across seven countries with over 400 professionals. Eficode guides customers with DevOps and Agile skills and practices, and enables them to focus on their growth and customers with Eficode ROOT DevOps Platform: a managed service with over 40 preferred tools including Atlassian, Jenkins and Kubernetes; along with our Application Management and Atlassian services."
              },
              {
                title: "eliga",
                href: "http://eliga.fi/",
                img: require("@/assets/img/users/eliga.jpg"),
                text:
                  "Eliga is a one-man company owned and operated by Pekka Klärck, the original author and lead developer of Robot Framework. It offers first class training and consulting services related to using and extending Robot Framework, test automation in general and Python programming."
              },
              {
                title: "etteplan",
                href: "http://www.espotel.com/",
                img: require("@/assets/img/users/etteplan.png"),
                text:
                  "Etteplan is a specialist in industrial equipment engineering, embedded systems and IoT and technical documentation solutions and services with deep knowledge in QA from network edge to cloud in Nordics. Etteplan provides also consulting services in test automation and QA process development."
              },
              {
                title: "F2G Solutions",
                href: "https://www.f2gsolutions.com",
                img: require("@/assets/img/users/f2g.png"),
                text:
                  "5G testing, E2E automation and network quality assurance."
              },
              {
                title: "facile",
                href: "https://www.facile.it/",
                img: require("@/assets/img/users/facile.png"),
                text:
                  "Facile.it, Italy's leading price comparison company for insurance, financial services, utilities and internet providers. The company, founded in 2008, helps approximately 3 million users every month compare prices and save money on crucial elements of their household expenditure. Facile.it is an internet company with more than 300 employees in its Milano Headquarters and 1,000 total, and generated revenues of €106 million in 2019, growing more than 20% on top line with organic growth."
              },
              {
                title: "finnair",
                href: "https://www.finnair.com/",
                img: require("@/assets/img/users/finnair.jpg"),
                text:
                  "Finnair is using Robot Framework to support Finnair digital platform development."
              },
              {
                title: "gofore",
                href: "https://gofore.com/en/",
                img: require("@/assets/img/users/gofore.png"),
                text:
                  "Gofore Plc is a Finnish digitalisation specialist with international growth plans. We’re made up of over 700 people across Finland, Germany, Spain, and Estonia – top experts in our industry who are our company’s heart, brain, and hands. We use consulting, coding and design as tools to incite positive change. We care for our people, our customers, and the surrounding world. We rely on RobotFramework at our consulting, coding, design and quality assurance. Learn to know us better at <a href='https://www.gofore.com'>www.gofore.com</a>."
              },
              {
                title: "henix",
                href: "https://www.henix.com",
                img: require("@/assets/img/users/henix.png"),
                text:
                  "Henix is a French consulting company specializing in software quality assurance. By offering a wide range of services including test automation using Robot Framework, it has become the leading pure player test company in France. Since 2011, Henix is the publisher of the Squash Open Source testing suite. Made by testers for testers, it interfaces natively with Robot Framework to ease test automation management as efficiently as manual tests."
              },
              {
                title: "hiq",
                href: "http://www.hiqfinland.fi/",
                img: require("@/assets/img/users/hiq.jpg"),
                text:
                  "HiQ is a Nordic ICT service and consultancy company focusing on streamlining our customers' businesses and simplifying people's lives. We are specialists in demanding e-services, process integration and automation, quality assurance and business-critical IT."
              },
              {
                title: "humanitec",
                href: "https://humanitec.com/",
                img: require("@/assets/img/users/humanitec.png"),
                text:
                  "Humanitec is a software engineering company based in Berlin, Germany. Our team is building a platform to automate the continuous delivery process for Kubernetes-native applications. We believe that every developer in a team should be able to deploy apps to cloud resources without having to learn all the technical details and that DevOps experts should focus on what really matters and not on repetitive tasks. Our overall goal is to develop an open DevOps API to master Continuous Delivery."
              },
              {
                title: "imbus",
                href: "https://www.imbus.de/softwaretest/",
                img: require("@/assets/img/users/imbus.png"),
                text:
                  "imbus is a German leading solution partner for professional software testing and intelligent software quality assurance. The portfolio includes consulting for process improvement as well as test automation, test tools, and training. Since 1992, imbus has been synonymous with smart test automation."
              },
              {
                title: "ing group",
                href: "https://www.ing.com/Home.htm",
                img: require("@/assets/img/users/ing.png"),
                text:
                  "The ING Group is a Dutch multinational banking and financial services corporation headquartered in Amsterdam. Its primary businesses are retail banking, direct banking, commercial banking, investment banking, wholesale banking, private banking, asset management, and insurance services. At the heart of the bank in the Netherlands, NL Corebank we use Robot Framework to test our applications."
              },
              {
                title: "knowit",
                href: "http://www.knowit.fi/",
                img: require("@/assets/img/users/knowit.jpg"),
                text:
                  "Knowit is a consulting company that helps its clients succeed by operating close and in an innovative, business-oriented way. With our large pool of test automation professionals, we can ensure highest software quality and gain immediate and future savings."
              },
              {
                title: "kuka",
                href: "http://www.kuka.com/",
                img: require("@/assets/img/users/kuka.png"),
                text:
                  "There is a good reason why KUKA products can be found in virtually every industry: our portfolio offers perfectly matched automation solutions for more efficient manufacturing processes – from just a single robot to specialized cells through to complete system concepts."
              },
              {
                title: "luoto",
                href: "https://www.luotocompany.fi/",
                img: require("@/assets/img/users/luoto.jpg"),
                text:
                  "Full-stack software development company that focus on high quality. Interest in data and AI/ML also. Luoto has one of a kind, modern organization structure through full partner program, with lean management and sharp focus on customer experience. Our customers will get best 10% of IT specialist in market, who own the customer experience."
              },
              {
                title: "meliora",
                href: "https://www.melioratestlab.com/",
                img: require("@/assets/img/users/meliora.jpg"),
                text:
                  "Meliora Ltd develops Meliora Testlab, a cutting edge test management tool. Testlab integrates with Robot Framework to leanly give full visibility on quality – seamlessly integrating manual and automated testing efforts with specifications and issues."
              },
              {
                title: "nets",
                href: "https://www.nets.eu/",
                img: require("@/assets/img/users/nets.jpg"),
                text:
                  "At Nets, we see easier products and solutions as the foundation for growth and progress – both in commerce and society. With 2,400 employees located in Denmark, Norway, Finland, Sweden and Estonia, we help financial institutions, businesses and merchants across the Nordic and Baltic regions make tomorrow a little easier for their customers while delivering unrivalled security and stability. Powering a tomorrow that’s easier than today. This is what drives us."
              },
              {
                title: "nokia",
                href: "https://www.nokia.com/",
                img: require("@/assets/img/users/nokia.png"),
                text:
                  "Nokia develops and delivers the telecommunications industry's only end-to-end portfolio of network equipment, software, services and licensing that is available globally. Nokia also serves consumers with technology and devices. First versions of Robot Framework were developed in Nokia and Robot Framework is extensively used and developed further in Nokia today."
              },
              {
                title: "nordea",
                href: "https://www.nordea.com/en/",
                img: require("@/assets/img/users/nordea.png"),
                text:
                  "Nordea is a leading Nordic universal bank. We are helping our customers realise their dreams and aspirations – and we have done that for 200 years. We want to make a real difference for our customers and the communities where we operate – by being a strong and personal financial partner. The Nordea share is listed on the Nasdaq Helsinki, Nasdaq Copenhagen and Nasdaq Stockholm exchanges."
              },
              {
                title: "northcode",
                href: "https://www.northcode.fi/",
                img: require("@/assets/img/users/northcode.png"),
                text:
                  "We do everything related to Software Automation (SA). DevOps, DevSecOps, Robotic Process Automation, Test Automation, CI/CD etc, you name it and we do it!  We have a disruptive model in the way how we see the company as a community. The cornerstones of the model are ownership, fairness and transparency. Automation is the catalyst for technical revolution. SA frees people to work with more complex matters in order to achieve prosperity for mankind!"
              },
              {
                title: "op",
                href: "https://www.op.fi/op-ryhma",
                img: require("@/assets/img/users/op.png"),
                text:
                  "OP Financial Group is Finland's largest financial services group whose mission is to promote the sustainable prosperity, security and wellbeing of its owner-customers and business environment. The Group has a staff of 12,000 and almost 2 million owner-customers. OP uses Robot Framework for improving our agile testing quality and CI/CD, as well for bringing more customer satisfaction with the RPA capabilities."
              },
              {
                title: "opuscapita",
                href: "https://www.opuscapita.com/",
                img: require("@/assets/img/users/opuscapita.jpg"),
                text:
                  "OpusCapita enables organizations to sell, buy and pay quickly and securely, with a real-time view of their business. Over 3000 customers in over 100 countries use our source-to-pay, cash management and product information management solutions to connect, transact and grow."
              },
              {
                title: "oura",
                href: "https://ouraring.com",
                img: require("@/assets/img/users/oura.png"),
                text:
                  "Oura Health Ltd. is a Finnish health technology company, best known for the Oura Ring, a smart ring used to track sleep and physical activities."
              },
              {
                title: "ouro",
                href: "https://www.ouro.fi/",
                img: require("@/assets/img/users/ouro.png"),
                text:
                  "Ouro is a Finnish company providing software automation solutions, including test automation and CI/CD pipeline development. We enable our customers to use modern software development tools, methods and practices."
              },
              {
                title: "qentinel",
                href: "http://qentinel.fi/",
                img: require("@/assets/img/users/qentinel.png"),
                text:
                  "Qentinel is the leading robotic software testing company applying system thinking and AI to maximize value creation. We have over hundred enthusiastic specialists who create the next generation of automated QA without humans in the loop. We believe your business is as good as software driving it."
              },
              {
                title: "qfactory",
                href: "http://www.q-factory.fi/",
                img: require("@/assets/img/users/qfactory.jpg"),
                text:
                  "Q-Factory is specialized in test automation and quality assurance services. Our expertise is based on strong project experience, and extensive testing and test tool knowledge. We emphasize on early software quality and we help fixing quality issues when it's most economical – before they are made."
              },
              {
                title: "reaktor",
                href: "http://reaktor.fi/",
                img: require("@/assets/img/users/reaktor.jpg"),
                text:
                  "Reaktor is a creative technology house that constructs exceptional digital services. We build services for clients specializing in finance, retail, media, telecommunications, in-flight services and the public sector."
              },
              {
                title: "robocorp",
                href: "https://robocorp.com/",
                img: require("@/assets/img/users/robocorp.png"),
                text:
                  "Robocorp is set out to change Robotic Process Automation. RPA has the potential to change how millions of people work every day and Robocorp is making it accessible to everyone through license-free open source technologies, delivered from a cloud platform."
              },
              {
                title: "segron",
                href: "https://www.segron.com",
                img: require("@/assets/img/users/segron.png"),
                text:
                  "SEGRON provides Beyond End2End Test Automation solutions for communication networks. Our unique Automated Test Framework approach can orchestrate real-time testing with Out-of-the-Box end-user devices (iOS and Android smartphones and IoT devices). We strive to offer the industry expertise and reliable service that businesses look for in a long-term test automation partner."
              },
              {
                title: "signant health",
                href: "https://signanthealth.com",
                img: require("@/assets/img/users/signant.png"),
                text:
                  "Signant Health (formerly known as CRF Health, the 4th unicorn from Finland) is a Product Company creating eCOA product platform in regulated business area. We use Robot Framework and Python for our test automation in our offices in Helsinki and Iasi, Romania. We understand the importance of quality in software development. We are good, but we want to be the best in our industry."
              },
              {
                title: "siili",
                href: "http://www.siili.com/",
                img: require("@/assets/img/users/siili.jpg"),
                text:
                  "We are a modern, full-service technology company. We help you create better business and meaningful digital experiences by combining strategic insight, creative design, data management, and technology expertise."
              },
              {
                title: "sleepIQ",
                href: "https://bamlabs.com/",
                img: require("@/assets/img/users/sleepiq.png"),
                text:
                  "SleepIQ Labs is a subsidiary of Sleep Number Corporation, the creators of the Sleep Number bed. SleepIQ Labs, the pioneers of biometric sensor sleep solutions and sleep-monitoring technologies, was acquired by Sleep Number in 2015. SleepIQ has been foundational in elevating Sleep Number’s sleep innovation leadership and is quickly transforming the Sleep Number 360® smart bed into the hub of health and wellness."
              },
              {
                title: "symbio",
                href: "http://www.symbio.com/",
                img: require("@/assets/img/users/symbio.jpg"),
                text:
                  "Symbio is international co-creation innovation partner. We help our customers create high quality products and future services in digital world. Our core capabilities include software development, test automation, IoT and Connected Car development, QA, embedded development, interoperability and globalization services."
              },
              {
                title: "testimate",
                href: "http://www.testimate.fi/",
                img: require("@/assets/img/users/testimate.jpg"),
                text:
                  "Testimate provides comprehensive and independent high-quality software testing services for small and large systems or products. Our employees are versatile testing experts with several years of experience in testing, managing and leading testing and test automation using commercial and open source tools. We know we are good at what we do – and our clients agree!"
              },
              {
                title: "tietoevry",
                href: "https://www.tietoevry.com/",
                img: require("@/assets/img/users/tietoevry.png"),
                text:
                  "TietoEVRY creates digital advantage for businesses and society. We are a leading digital services and software company with local presence and global capabilities. Our Nordic values and heritage steer our success.<br><br>Headquartered in Finland, TietoEVRY employs around 24 000 experts globally. The company serves thousands of enterprise and public sector customers in more than 90 countries."
              },
              {
                title: "vala",
                href: "http://www.valagroup.com/",
                img: require("@/assets/img/users/vala.jpg"),
                text:
                  "VALA Group provides outstanding software development and quality assurance services by utilizing automation, co-operation and intelligent tool selection for companies ranging from start-ups to major publicly listed companies. Our greatest strenghts include Test Automation, QA Process Consultation and Quality Driven Software Development."
              },
              {
                title: "veikkaus",
                href: "https://www.veikkaus.fi/",
                img: require("@/assets/img/users/veikkaus.png"),
                text:
                  "Almost all adult Finns play our games; at Veikkaus we have over two million loyal customers. Thanks to the players, over one billion euros a year are accumulated for the common good. Robot Framework plays a key role in our test automation and RPA."
              }
            ]
          }
        }
      ]
    }
  }
};
</script>
