import { reactive } from 'vue'

export const store = reactive({
    navItem: [
        'Home', 'About', 'Services', 'Showcase', 'Blog', 'Contact'
    ],
    quickLinks: [
        {
            name: 'Careers',
            url: '#'
        },
        {
            name: 'News',
            url: '#'
        },
        {
            name: 'Terms of use',
            url: '#'
        },
        {
            name: 'Privacy Projects',
            url: '#'
        },
        {
            name: 'About',
            url: '#'
        },
        {
            name: 'Contact',
            url: '#'
        },
    ],
    contacts: {
        name: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051',
        email: 'info@yourdomain.com',
        telNumber: '+99 (0) 101 0000 888'
    },
    clickSearch: false,


});