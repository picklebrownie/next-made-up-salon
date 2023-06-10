export type Service = {
    name: string,
    id: number,
    description: string,
    imageSrc: string,
    imageAlt: '',
}

export const services: Service[] = [
    {
        name: 'Balayage',
        id: 1,
        description: 'A freehand technique where the stylist paints highlights onto the hair, creating a natural, sun-kissed look. The highlights are usually focused around the face and towards the ends of the hair.',
        imageSrc: '/services-balayage.png',
        imageAlt: '',
    },
    {
        name: 'Precision Cuts',
        id: 2,
        description: 'Our stylist will carefully analyze your hair and facial features to determine the most suitable cut and then use precise cutting techniques to achieve the desired look. This attention to detail can make a significant difference in the overall appearance of the haircut, resulting in a more polished and sophisticated look. ',
        imageSrc: '/services-precision-cuts.png',
        imageAlt: '',
    },
    {
        name: 'Root Touch-Up',
        id: 3,
        description: 'A root touch-up is a method where the stylist applies hair color specifically to the new growth area at the roots, helping to conceal any gray hair or maintain the existing hair color.',
        imageSrc: '/services-root-touch-up.png',
        imageAlt: '',
    },
    {
        name: 'Color Melting',
        id: 4,
        description: 'Color melting is a technique where the stylist blends two or more colors together, creating a seamless transition between the colors. The colors are usually applied using a freehand technique or foiling.',
        imageSrc: '/services-color-melting.png',
        imageAlt: '',
    },
    {
        name: 'Ombre',
        id: 5,
        description: 'Ombre hair color is acheived using a technique where the hair is darker at the roots and gradually gets lighter towards the ends, creating a graduated color effect. The color is usually applied using a freehand technique or foiling.',
        imageSrc: '/services-ombre.png',
        imageAlt: '',
    },
    {
        name: 'Bridal Services',
        id: 6,
        description: 'Get the perfect wedding day look with our customized bridal services. Our expert team of stylists will work with you to create a hairstyle that complements your dress and overall aesthetic. Plus, we offer hair and makeup services for the entire bridal party, so everyone looks and feels their best on your big day.',
        imageSrc: '/services-bridal.png',
        imageAlt: '',
    },
    {
        name: 'Hair Extensions',
        id: 7,
        description: 'Our expert stylists use only the finest, ethically-sourced hair to give you natural-looking, seamless extensions that blend seamlessly with your own hair. Whether you want to add length, volume, or a pop of color, our hair extensions are fully customizable to meet your unique needs and preferences.',
        imageSrc: '/services-hair-extensions.png',
        imageAlt: '',
    },
    {
        name: 'Foiling',
        id: 8,
        description: 'Foiling is a technique where the stylist separates sections of hair and applies color or highlights to each section. The hair is then wrapped in foil to help the color develop and to create more defined highlights.',
        imageSrc: '/services-foiling.png',
        imageAlt: '',
    },
    {
        name: 'Deep Conditioning',
        id: 9,
        description: 'Deep conditioning is a treatment that involves applying an intensive conditioner to the hair for an extended period of time, allowing it to penetrate deeply into the hair shaft. This treatment can help restore moisture and elasticity to dry or damaged hair, while also providing nourishment and repair. ',
        imageSrc: '/services-deep-conditioning.png',
        imageAlt: '',
    },
    {
        name: 'Color correction',
        id: 10,
        description: 'Correcting hair color that has been damaged, over-processed, or previously colored improperly. This requires knowledge of color theory, advanced color application techniques, and experience with a variety of color products.',
        imageSrc: '/services-color-correction.png',
        imageAlt: '',
    },
    {
        name: 'Highlights',
        id: 11,
        description: 'Our skilled stylists use the latest techniques and premium products to achieve the perfect shade and tone for your skin tone and style. Whether you want natural sun-kissed highlights or bold statement color, we\'ve got you covered.',
        imageSrc: '/services-highlights.png',
        imageAlt: '',
    }
]