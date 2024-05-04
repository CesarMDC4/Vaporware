import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        home: '/src/pages/1.home/Home.jsx',
        services: '/src/pages/2.services/Services.jsx',
        service1: '/src/pages/2.services/Service1.jsx',
        service2: '/src/pages/2.services/Service2.jsx',
        service3: '/src/pages/2.services/Service3.jsx',
        service4: '/src/pages/2.services/Service4.jsx',
        service5: '/src/pages/2.services/Service5.jsx',
        service6: '/src/pages/2.services/Service6.jsx',
        contact: '/src/pages/4.contact/Contact.jsx',
        training: '/src/pages/5.Training/Training.jsx',
        coursecatalog: '/src/pages/5.Training/CourseCatalog.jsx',
        register: '/src/pages/5.Training/Register.jsx',
        about: '/src/pages/6.About/About.jsx',
        login: '/src/pages/7.Login/Login.jsx',
        reset: '/src/pages/7.Login/Reset.jsx',
        cart: '/src/pages/9.Cart/Cart.jsx',
        coursehistory: '/src/pages/10.courseHistory/CourseHistory.jsx',
      },
    },
  },
});