const Home = {
    template: `

    <div class="description-box">
    <p>Hello! My name is Julian Biondo, a 21-year-old aspiring cybersecurity specialist currently pursuing a Bachelor of Information Technology with a major in Cyber Security at Deakin University.</p>
    <p>My journey in the realm of technology extends beyond the classroom, as I currently serve as an ICT Coordinator, where I get to apply and expand my knowledge in real-world scenarios. Besides my core field of study, I have a keen interest in digital media, including Photoshop, illustrations, and animation.</p>
    
    </div>
    
`
};

 

const ITSkills = {
    template: `
    <div id="ITSkills">
        <h1>IT Skills</h1>
        <button @click="prevSkill" :disabled="currentSkillIndex === 0">Previous</button>
        <button @click="nextSkill" :disabled="currentSkillIndex === skills.length - 1">Next</button>
        <p>{{ skills[currentSkillIndex] }}</p>
    </div>`,
    data() {
        return {
            currentSkillIndex: 0,
            skills: [
                'Proficient in operating systems including Windows and macOS, with a focus on troubleshooting and support for end-users',
                'Knowledgeable of cloud computing and related services such as AWS and Azure, including deployment, configuration, and management of cloud resources',
                'Programming: Proficient in Java, Python, and JavaScript with a strong understanding of data structures and algorithms.',
                'Experience with ticketing systems like ServiceNow and SpiceWorks, including logging, prioritizing, and resolving tickets ',
                'Web Development: Skilled in HTML, CSS, and Vue.js with a focus on creating responsive and user-friendly interfaces.',
                ' Proficient in Microsoft Office applications.',
                ' Experienced in troubleshooting hardware and software issues for desktops, laptops, and mobile devices.',
                ' Understanding of cybersecurity concepts and best practices, including risk assessment, vulnerability management, and incident response',
                'Experience with network administration, including configuration and management of routers, switches, and firewalls',
                
            ]
        }
    },
    methods: {
        nextSkill() {
            if (this.currentSkillIndex < this.skills.length - 1) {
                this.currentSkillIndex++;
            }
        },
        prevSkill() {
            if (this.currentSkillIndex > 0) {
                this.currentSkillIndex--;
            }
        }
    }
};

 

const Contact = {
    template: `
<div id="Contact">
<h1>Contact Me</h1>
<form @submit.prevent="handleSubmit">
<label for="name">Name:</label><br>
<input type="text" id="name" v-model="name" placeholder="Enter your name" required><br>
<label for="email">Email:</label><br>
<input type="email" id="email" v-model="email" placeholder="Enter your email" required><br>
<label for="message">Message:</label><br>
<textarea id="message" v-model="message" placeholder="Enter your message" required></textarea><br><br>
<input type="submit" value="Submit">
</form>
<p v-if="name">Hello, {{ name }}! Thanks for sumbitting your details. I'll be sure to get in touch soon. :)</p>
</div>`,
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        handleSubmit() {
            alert('Form submitted!');
            
        }
    }
};

 

const experience = {
        template: `
        <div id="Experience">
            <h1>Experience</h1>
            <div class="experience-container">
                <div class="education">
                    <h2>Education</h2>
                    <ul>
                        <li>Bachelor of Information Technology, Major in Cyber Security, Deakin University</li>
                        <li>Caulfield Grammer School, Completed VCE</li>
                        <li>Certificate III in Screen and Media</li>
                        
                    </ul>
                </div>
                <div class="work">
                    <h2>Work Experience - Level 2 IT Technician Acciona</h2>
                    <ul>
                    <li>Provided in person and remote technical support to end-users, including troubleshooting issues and configuring systems and applications, resulting in over 1500 tickets resolved.</li>
                    <li>Developed a new system to efficiently organise new starters, which includes an online dashboard that tracks progress of new hires and automates the onboarding process, resulting in a more streamlined and efficient workflow for HR and IT staff.</li>
                    <li>Travelled to various sites multiple times per week to provide on-site technical support.</li>
                    <li>Trained multiple interns, providing them with necessary skills and knowledge to contribute to team projects and meet organisational goals.</li>
                    <li>Hosted IT induction meetings for new employees to deliver an overview of the company's technology policies and procedures, ensure they have necessary tools and access to begin work, and answering any questions.</li>
                    <li>Developed a comprehensive set of IT-related guides that are commonly used in the workplace, including user manuals, troubleshooting guides, and software and hardware installation guides, resulting in improved user productivity and reduced IT support requests.</li>
                </ul>
                </div>
            </div>
        </div>`
    };

 

const routes = [
    { path: '/', component: Home },
    { path: '/itskills', component: ITSkills },
    { path: '/experience', component: experience },
    { path: '/contact', component: Contact },
];

 

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

 

const app = Vue.createApp({});
app.use(router);
app.mount('#app');