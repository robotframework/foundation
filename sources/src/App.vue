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
                '<p> <b>Robot Framework</b> is a generic open source test automation framework for acceptance testing and acceptance test-driven development (ATDD). For more details about the framework itself see http://robotframework.org. <br><br><b>Robot Framework Foundation</b> is a non-profit consortium that fosters the growth of Robot Framework. It was founded by companies with a common interest to ensure the development of framework now and in the future. </p>'
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
                '<p> The main benefit of being a member is assuring the future of Robot Framework. A more concrete benefit is that these member companies and organizations are listed here, making their Robot Framework knowledge or usage more visible for possible new clients, employers and other parties. <br><br> If the company or organization you represent is interested to join or you have any questions related to the membership, please send an email to robotframework-foundation@googlegroups.com and we will get back to you.</p>',
              textAfterTable: 'Annual membership fees are determined based on two factors: (1) number of people using, selling services or otherwise involved with Robot Framework; (2) is the organization a service provider selling Robot Framework related services, or is it a product company using the framework to test its own products.'
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
                  "Eficode is the leading devops company in Finland. Our services rely on automation, virtualisation and smart tool choices. Boring work tasks are left for robots while people get to focus on the best part of software production: creative and client-centred development work."
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
                title: "finnair",
                href: "https://www.finnair.com/",
                img: require("@/assets/img/users/finnair.jpg"),
                text:
                  "Finnair is using Robot Framework to support Finnair digital platform development."
              },
              {
                title: "hiq",
                href: "http://www.hiqfinland.fi/",
                img: require("@/assets/img/users/hiq.jpg"),
                text:
                  "HiQ is a Nordic ICT service and consultancy company focusing on streamlining our customers' businesses and simplifying people's lives. We are specialists in demanding e-services, process integration and automation, quality assurance and business-critical IT."
              },
              {
                title: "imbus",
                href: "https://www.imbus.de/softwaretest/",
                img: require("@/assets/img/users/imbus.png"),
                text:
                  "imbus is a German leading solution partner for professional software testing and intelligent software quality assurance. The portfolio includes consulting for process improvement as well as test automation, test tools, and training. Since 1992, imbus has been synonymous with smart test automation."
              },
              {
                title: "knowit",
                href: "http://www.knowit.fi/",
                img: require("@/assets/img/users/knowit.jpg"),
                text:
                  "Knowit is a consulting company that helps its clients succeed by operating close and in an innovative, business-oriented way. With our large pool of test automation professionals, we can ensure highest software quality and gain immediate and future savings."
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
                title: "navigate",
                href: "https://www.navigateconsulting.se/",
                img: require("@/assets/img/users/navigate.jpg"),
                text:
                  "Navigate Consulting is an independent Consultant Company, working with services in the Nordic IT-market. We started our business in 2003, and have since the beginning built a leading software services company, with focus on Quality Assurance."
              },
              {
                title: "nets",
                href: "https://www.nets.eu/",
                img: require("@/assets/img/users/nets.jpg"),
                text:
                  "At Nets, we see easier products and solutions as the foundation for growth and progress – both in commerce and society. With 2,400 employees located in Denmark, Norway, Finland, Sweden and Estonia, we help financial institutions, businesses and merchants across the Nordic and Baltic regions make tomorrow a little easier for their customers while delivering unrivalled security and stability. Powering a tomorrow that’s easier than today. This is what drives us."
              },
              {
                title: "opuscapita",
                href: "https://www.opuscapita.com/",
                img: require("@/assets/img/users/opuscapita.jpg"),
                text:
                  "OpusCapita enables organizations to sell, buy and pay quickly and securely, with a real-time view of their business. Over 3000 customers in over 100 countries use our source-to-pay, cash management and product information management solutions to connect, transact and grow."
              },
              {
                title: "qfactory",
                href: "http://www.q-factory.fi/",
                img: require("@/assets/img/users/qfactory.jpg"),
                text:
                  "Q-Factory is specialized in test automation and quality assurance services. Our expertise is based on strong project experience, and extensive testing and test tool knowledge. We emphasize on early software quality and we help fixing quality issues when it's most economical – before they are made."
              },
              {
                title: "qentinel",
                href: "http://qentinel.fi/",
                img: require("@/assets/img/users/qentinel.jpg"),
                text:
                  "Qentinel is a Finnish company that specialises in information system quality assurance, offering a comprehensive range of services in this field with years of experience in the industry. We ensure the quality of information systems throughout their life cycle from business requirements to production."
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
                href: "https://robocorptech.com/",
                img: require("@/assets/img/users/robocorp.png"),
                text:
                  "Robocorp is set out to change Robotic Process Automation. RPA has the potential to change how millions of people work every day and Robocorp is making it accessible to everyone through license-free open source technologies, delivered from a cloud platform."
              },
              {
                title: "siili",
                href: "http://www.siili.com/",
                img: require("@/assets/img/users/siili.jpg"),
                text:
                  "We are a modern, full-service technology company. We help you create better business and meaningful digital experiences by combining strategic insight, creative design, data management, and technology expertise."
              },
              {
                title: "solidabis",
                href: "http://www.solidabis.com/",
                img: require("@/assets/img/users/solidabis.jpg"),
                text:
                  "Solidabis is a new agile and hungry company in the Finnish IT market. The core group of the company consists of seasoned business, service design, software development and testing veterans. Solidabis combines business and digitalization know-how with the best technical experience in software development."
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
                title: "tieto",
                href: "http://www.tieto.com/",
                img: require("@/assets/img/users/tieto.jpg"),
                text:
                  "Tieto aims to capture the significant opportunities of the data-driven world and turn them into lifelong value for people, business and society. We aim to be customers' first choice for business renewal by combining our software and services capabilities with a strong drive for co-innovation and ecosystems."
              },
              {
                title: "vala",
                href: "http://www.valagroup.com/",
                img: require("@/assets/img/users/vala.jpg"),
                text:
                  "VALA Group provides outstanding software development and quality assurance services by utilizing automation, co-operation and intelligent tool selection for companies ranging from start-ups to major publicly listed companies. Our greatest strenghts include Test Automation, QA Process Consultation and Quality Driven Software Development."
              }
            ]
          }
        }
      ]
    }
  }
};
</script>
