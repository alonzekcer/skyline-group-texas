import { SupportStep, Deal, Founder } from '../types';

export const DEFW_STATS = [
    { name: '2000', price: 130000 },
    { name: '2004', price: 145000 },
    { name: '2008', price: 155000 },
    { name: '2012', price: 165000 },
    { name: '2016', price: 220000 },
    { name: '2020', price: 280000 },
    { name: '2022', price: 360000 },
    { name: '2023', price: 380000 },
    { name: '2024', price: 395000 },
    { name: '2025', price: 420000 },
];

export const FULL_SUPPORT: SupportStep[] = [
    { id: 1, title: 'פתיחת חברה (LLC)', description: 'פתיחה מהירה וחסכונית להגנה משפטית מלאה על הנכסים שלכם.', icon: '🏢' },
    { id: 2, title: 'חשבון בנק עסקי', description: 'פתיחת חשבון אמריקאי ביעילות לניהול כספי ההשקעה.', icon: '🏦' },
    { id: 3, title: 'השוואת הלוואות', description: 'מימון אופטימלי מול לנדרים מובילים שאנו עובדים איתם אישית.', icon: '📈' },
    { id: 4, title: 'ניהול מו"מ', description: 'ניהול קשוח מול המוכרים להשגת המחיר הטוב ביותר מתחת למחירי השוק.', icon: '🤝' },
    { id: 5, title: 'עריכת חוזה רכישה', description: 'חוזה מגן ומקצועי השומר על האינטרסים שלכם בכל שלב.', icon: '📄' },
    { id: 6, title: 'בדיקת נכס (Inspection)', description: 'ביקורת מבנה יסודית ע"י מומחים אובייקטיביים.', icon: '🔍' },
    { id: 7, title: 'ניהול שיפוץ והשבחה', description: 'פיקוח על עבודות השבחה להעלאת ערך הנכס והשכירות.', icon: '🛠️' },
    { id: 8, title: 'הכנה ל-Section 8', description: 'התאמת הנכס לדרישות התוכנית הממשלתית.', icon: '⚖️' },
    { id: 9, title: 'סינון דיירים', description: 'תהליך סינון קפדני הכולל בדיקת רקע, אשראי ויכולת החזר.', icon: '👥' },
    { id: 10, title: 'ניהול כניסה וחוזים', description: 'ליווי חוזי מלא עד לרגע מסירת המפתח לדייר.', icon: '🔑' },
    { id: 11, title: 'כלים לניהול עצמי', description: 'מערכות מתקדמות לגבייה אוטומטית ומעקב שקוף או חיבור לחברת ניהול מקומית.', icon: '📱' },
    { id: 12, title: 'החזקת נכס איכותי', description: 'נכס מניב בשכונות ירוקות ומבוקשות לשנים קדימה.', icon: '🌳' }
];

export const DEALS: Deal[] = [
    {
        id: '1',
        address: 'Grass Valley Trl, Fort Worth',
        price: '$268,000',
        marketValue: '$330,000',
        rent: '$2,980',
        roi: '12.85%',
        cashFlow: '$830',
        rehab: '$8,000',
        piti: '$2,150',
        yearBuilt: '2006',
        sqft: '1,879',
        lotSize: '5,663',
        image: '/skyline-group-texas/images/deal1.jpg',
        badge: 'עסקה שהושלמה',
        tags: ['4 חדרי שינה', '2 חדרי רחצה'],
        equity: '$62,000+'
    },
    {
        id: '2',
        address: 'Garden Springs Dr, Fort Worth',
        price: '$275,000',
        marketValue: '$350,000',
        rent: '$3,500',
        roi: '15.8%',
        cashFlow: '$1,150',
        rehab: '$14,700',
        piti: '$2,350',
        yearBuilt: '2005',
        sqft: '3,456',
        lotSize: '5,486',
        image: '/skyline-group-texas/images/deal4.jpg',
        badge: 'עסקה שהושלמה',
        tags: ['5 חדרי שינה', '2.5 חדרי רחצה'],
        equity: '$75,000+'
    },
    {
        id: '3',
        address: 'Waterwood Dr, Wylie',
        price: '$305,000',
        marketValue: '$380,000',
        rent: '$3,200',
        roi: '10.5%',
        cashFlow: '$800',
        rehab: '$11,500',
        piti: '$2,400',
        yearBuilt: '2001',
        sqft: '2,100',
        lotSize: '6,098',
        image: '/skyline-group-texas/images/deal2.jpg',
        badge: 'עסקה שהושלמה',
        tags: ['4 חדרי שינה', '2.5 חדרי רחצה', 'בריכה'],
        equity: '$75,000+'
    },
    {
        id: '4',
        address: 'Herring Dr, Forney',
        price: '$280,000',
        marketValue: '$330,000',
        rent: '$3,100',
        roi: '16.6%',
        cashFlow: '$978',
        rehab: '$750',
        piti: '$2,122',
        yearBuilt: '2025',
        sqft: '1,880',
        lotSize: '5,050',
        image: '/skyline-group-texas/images/deal5.jpg',
        badge: 'עסקה שהושלמה',
        tags: ['4 חדרי שינה', '2 חדרי רחצה'],
        equity: '$50,000+'
    },
    {
        id: '5',
        address: 'Wavecrest ct, Little Elm 75068',
        price: '$275,000',
        marketValue: '$330,000',
        rent: '$3,200',
        roi: '12.5%',
        cashFlow: '$950',
        rehab: '$19,000',
        piti: '$2,250',
        yearBuilt: '2003',
        sqft: '2,318',
        lotSize: '7,884',
        image: '/skyline-group-texas/images/deal3.jpg',
        badge: 'עסקה שהושלמה',
        tags: ['4 חדרי שינה', '3 חדרי רחצה'],
        equity: '$55,000+'
    }
];

export const FOUNDERS: Founder[] = [
    {
        name: 'בעז פנחס',
        role: 'מייסד ומנהל',
        image: '/skyline-group-texas/images/boaz.jpg',
        bio: 'בעל ניסיון עשיר בליווי משקיעים ואופטימיזציה פיננסית בשוק הנדל"ן האמריקאי.',
        phone: '052-6868-718',
        objectPosition: 'top'
    },
    {
        name: 'נוי קריוק',
        role: 'מייסד ומנהל',
        image: '/skyline-group-texas/images/noy.jpg',
        bio: 'מומחה לאיתור עסקאות מתחת למחיר השוק וניהול מערכי שיפוץ והשבחה בטקסס.',
        phone: '050-828-1215'
    }
];
