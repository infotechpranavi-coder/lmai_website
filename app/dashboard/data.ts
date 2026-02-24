export const initialBanners = {
    'Home': [
        { id: 1, title: 'Advancing the Label Industry', subtitle: 'Innovation & Excellence since 2002', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80' },
        { id: 2, title: 'Global Recognition', subtitle: 'Empowering label manufacturers worldwide', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80' }
    ],
    'About': [{ id: 1, title: 'Our Journey', subtitle: 'The foundation of excellence', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80' }],
    'Membership': [{ id: 1, title: 'Join the Community', subtitle: 'Access exclusive industry benefits', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80' }],
    'Events': [{ id: 1, title: 'Upcoming Summits', subtitle: 'Network with industry leaders', image: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?w=1600&q=80' }],
    'Awards': [{ id: 1, title: 'Label Awards 2024', subtitle: 'Celebrating the craft of labeling', image: 'https://images.unsplash.com/photo-1531050171651-7e8020627276?w=1600&q=80' }],
    'Newsletters': [{ id: 1, title: 'Industry Insights', subtitle: 'Monthly updates on global trends', image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&q=80' }],
    'Presentations': [{ id: 1, title: 'Knowledge Hub', subtitle: 'Watch professional industry spotlights', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80' }],
    'Management': [{ id: 1, title: 'Leadership Board', subtitle: 'The visionaries behind LMAI', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80' }],
    'Contact': [{ id: 1, title: 'Get In Touch', subtitle: 'Connecting you with the secretariat', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80' }]
};

export const initialEvents = {
    upcoming: [
        { id: 1, title: 'LMAI Summer Summit 2024', date: 'July 15-18, 2024', description: 'Exploring digital transformation in label printing.', coverImage: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?w=800&q=80', gallery: ['https://images.unsplash.com/photo-1511578314322-379afb476865', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678'] },
        { id: 2, title: 'Innovation Workshop Delhi', date: 'August 22, 2024', description: 'Practical session on sustainable material usage.', coverImage: 'https://images.unsplash.com/photo-1591115765373-520b7a42530c?w=800&q=80', gallery: [] }
    ],
    past: [
        { id: 1, title: 'LMAI Gala 25th Anniversary', date: 'Dec 2023', description: 'Celebrating a quarter century of industry leadership.', coverImage: 'https://images.unsplash.com/photo-1519671482749-fd09be38250b?w=800&q=80', gallery: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'] },
        { id: 2, title: 'Brussels Delegation Meet', date: 'Oct 2023', description: 'Strategic global collaboration session.', coverImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', gallery: [] }
    ]
};

export const initialAwards = [
    { id: 1, title: 'LMAI Label Awards 2023', category: 'Technical Excellence', description: 'Highest honors for printing precision.', image: 'https://images.unsplash.com/photo-1578574515323-233000df060c?w=800&q=80', gallery: [] },
    { id: 2, title: 'Innovation in Sustainability', category: 'Environmental Choice', description: 'Recognizing eco-friendly manufacturing initiatives.', image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&q=80', gallery: [] }
];

export const initialNewsletters = [
    { id: 1, title: 'LMAI Monthly Digest - March 2024', category: 'Monthly Digest', date: 'March 1, 2024', description: 'Covering the annual conference highlights, technical innovations, and member initiatives.', fileSize: '2.4 MB', image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80', file: '/newsletters/march-2024.pdf' },
    { id: 2, title: 'Quarterly Technical Report Q4', category: 'Technical Report', date: 'December 20, 2023', description: 'Detailed analysis of global supply chain trends and Indian industry impact.', fileSize: '3.1 MB', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', file: '/newsletters/oct-2023.pdf' }
];

export const initialPresentations = [
    { id: 1, title: "The Future of Label Manufacturing 2024", speaker: "Rajish Verma", date: "March 15, 2024", description: "A deep dive into technological transformations in the Indian label industry.", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", category: "Keynote", youtubeLink: "https://youtube.com/watch?v=example1" },
    { id: 2, title: "Sustainability in Flexible Packaging", speaker: "Ananya Sharma", date: "February 28, 2024", description: "Exploring eco-friendly materials and waste reduction strategies.", thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80", category: "Technical Talk", youtubeLink: "https://youtube.com/watch?v=example2" }
];

export const initialManagement = {
    boardOfDirectors: [
        { id: 1, name: "Sandeep Zaveri", title: "President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
        { id: 2, name: "Kuldip Goel", title: "Honorary Secretary", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" }
    ],
    lmaiForce: [
        { id: 1, name: "Amit Goel", title: "Core Committee", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" }
    ],
    pastPresidents: [
        { id: 1, name: "Vivek Kapoor", title: "Past President (2020-2022)", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=500&fit=crop" }
    ]
};

export const initialEnquiries = [
    { id: 1, name: "Rahul Mehta", email: "rahul.mehta@printsol.com", subject: "Membership Inquiry", message: "Interested in the platinum membership tier for our Delhi facility. Please share details.", date: "Feb 20, 2024", status: "Unread" },
    { id: 2, name: "Sara Jain", email: "sjain@packaginghub.in", subject: "Event Sponsorship", message: "We would like to sponsor the upcoming LMAI Summer Summit. Who is the right contact?", date: "Feb 18, 2024", status: "In Discussion" },
    { id: 3, name: "Michael Chen", email: "m.chen@labelworld.sg", subject: "Technical Collaboration", message: "Inquiry regarding L9 delegation meet and potential synergies.", date: "Feb 15, 2024", status: "Read" }
];
