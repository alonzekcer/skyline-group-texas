import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, ArrowLeft } from 'lucide-react';
import { PageId } from '../types';

interface FAQItemProps {
    question: string;
    children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-right hover:text-gold transition-colors focus:outline-none group"
            >
                <span className="text-xl md:text-2xl font-black text-navy group-hover:text-gold transition-colors">
                    {question}
                </span>
                {isOpen ? <ChevronUp className="text-gold shrink-0" size={24} /> : <ChevronDown className="text-slate-300 group-hover:text-gold shrink-0 transition-colors" size={24} />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-lg text-slate-500 font-medium leading-relaxed whitespace-pre-line">
                    {children}
                </div>
            </div>
        </div>
    );
};

interface FAQViewProps {
    onNavigate: (id: PageId) => void;
}

const FAQView: React.FC<FAQViewProps> = ({ onNavigate }) => {
    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="py-12 bg-navy text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors font-bold mb-8 group mx-auto"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>חזרה לדף הבית</span>
                    </button>
                    <HelpCircle className="text-gold mx-auto mb-6" size={48} />
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase">שאלות ותשובות</h1>
                    <p className="text-xl text-blue-100/60 max-w-2xl mx-auto font-medium">
                        כל מה שצריך לדעת על השקעות נדל"ן ב-DFW, מימון, ניהול והמודל הייחודי שלנו.
                    </p>
                </div>
            </section>

            {/* Questions Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-2">
                        <FAQItem question="למה להשקיע דווקא בארה״ב?">
                            כי זו אחת המדינות הבודדות בעולם שבהן:
                            <ul className="list-disc list-inside mt-4 space-y-2 mr-4">
                                <li>יש הגנה חזקה על זכויות קניין</li>
                                <li>שוק שכירות עמוק ויציב</li>
                                <li>מימון גם למשקיעים זרים</li>
                                <li>נתונים פתוחים וחשופים לכל המידע שמשקיע נדל״ן צריך</li>
                            </ul>
                        </FAQItem>

                        <FAQItem question="למה להשקיע בטקסס?">
                            טקסס היא אחת המדינות החזקות והיציבות בארה״ב.
                            יש בה הגירה חיובית, שוק עבודה חזק, פיתוח מואץ ומיסוי נוח (אין מס הכנסה מדינתי).
                            אנשים מגיעים לטקסס כדי לעבוד, לבנות חיים ולהישאר.
                        </FAQItem>

                        <FAQItem question="למה להשקיע ב-DFW?">
                            DFW (דאלאס–פורט וורת׳) היא אחת המטרופולינים הגדולים והצומחים בארה״ב.
                            האזור משלב:
                            <ul className="list-disc list-inside mt-4 space-y-2 mr-4">
                                <li>שוק תעסוקה ענק</li>
                                <li>חברות גדולות ומרכזי תעשייה</li>
                                <li>אוניברסיטאות, תשתיות ואוכלוסייה חזקה</li>
                                <li>הגירה חיובית מסיבית</li>
                                <li>עליות ערך חזקות ויציבות</li>
                                <li>מחירי נדל״ן שעדיין מאפשרים תשואה</li>
                            </ul>
                        </FAQItem>

                        <FAQItem question="אני לא אזרח. אני יכול להשקיע ולקבל משכנתא?">
                            כן.
                            אין צורך באזרחות או גרין קארד.
                            משקיעים ישראליים יכולים לקבל כ-75% מימון ולפעמים אף יותר.
                            ולא, זה לא רק לעסקה הראשונה. אין הגבלה בכמות העסקאות שנוכל לקבל בהן מימון מקסימלי.

                            אנחנו מלווים אתכם בכל התהליך – בנקים, מסמכים וחיבורים נכונים – בצורה מסודרת וברורה.
                        </FAQItem>

                        <FAQItem question="למה שהמדינה תסכים לממן שכר דירה לדיירים ולשלם לי מעל מחיר שוק?">
                            המטרה של המדינה היא לפתח ולקדם אוכלוסיות מוחלשות, ולאפשר להן שיקום ויציבות.
                            במקום להשאיר משפחות במעגל של חוסר ודאות, המדינה מעדיפה לשכן אותן בבתים פרטיים, בשכונות הטובות ביותר באיזור כדי שישתלבו עם האוכלוסיה הטובה ביותר.

                            הרעיון פשוט: משפחה יציבה → חינוך טוב יותר → עתיד טוב יותר.
                            הילדים של אותן משפחות, בעוד כמה שנים, יהיו אזרחים עובדים שמשלמים מיסים.

                            מבחינת המדינה זו השקעה חברתית-כלכלית לטווח ארוך.
                            מבחינת המשקיע – זה מתבטא בשכר דירה גבוה ויציב, תשלומים מסודרים ופחות תנודתיות.
                        </FAQItem>

                        <FAQItem question="כמה הון עצמי אני צריך?">
                            בעסקאות שאנחנו מביאים – בתים איכותיים וחדישים, באזורים הטובים ביותר – נדרש הון עצמי של לפחות 80,000 דולר.
                        </FAQItem>

                        <FAQItem question="מה אם אין לי את הסכום הזה כרגע?">
                            זה מצב נפוץ ולגמרי לגיטימי.
                            במקרה כזה, יש כמה אפשרויות נכונות:
                            <ul className="list-disc list-inside mt-4 space-y-2 mr-4">
                                <li>להיכנס לעסקה עם שותף</li>
                                <li>לקחת הלוואה משלימה מישראל</li>
                                <li>או לחסוך עוד כמה חודשים</li>
                            </ul>
                            מה שאנחנו לא ממליצים עליו – זה להתפתות לעסקה “זולה” רק כדי להגיד שנכנסת לעולם הנדל״ן.
                            עסקה לא נכונה בזמן לא נכון עלולה לעלות ביוקר.
                        </FAQItem>

                        <FAQItem question="למה אתה לא מחפש נכסים זולים יותר?">
                            כי נדל״ן זה לא אקסל.
                            נדל״ן זה אנשים, זה בתים אמיתיים, וזה חיים אמיתיים.

                            מה שנראה טוב בגיליון אקסל – לא תמיד עובד בשטח.
                            נכסים זולים מאוד מגיעים לרוב עם שוכרים פחות יציבים, תחזוקה אינסופית וניהול מורכב.

                            המטרה היא נכס שנותן שקט, לא רק מספר יפה על הנייר.
                        </FAQItem>

                        <FAQItem question="איך אני מוודא שהנכס שאני קונה לא במחיר מופקע?">
                            לא קונים על עיוור.
                            לפני כל רכישה מתבצעות:
                            <ul className="list-disc list-inside mt-4 space-y-2 mr-4">
                                <li>השוואות עסקאות באזור</li>
                                <li>בדיקות שווי עצמיות על ידינו</li>
                                <li>אינספקשן</li>
                                <li>שמאות</li>
                            </ul>
                            אם המספרים לא עובדים – פשוט לא מתקדמים.
                        </FAQItem>

                        <FAQItem question="איך אתה בדיוק עושה את זה?">
                            אנחנו עובדים בתהליך ברור ושקוף:
                            היכרות והגדרת מטרה → מציאת נכס → בדיקות → מימון → רכישה.
                            כל שלב מוסבר מראש, בלי הפתעות באמצע.
                        </FAQItem>

                        <FAQItem question="האם יידרש שיפוץ והשבחה? ואם כן, האם אתה עוזר בזה?">
                            לעיתים כן ולעיתים לא – הכול נבדק מראש.
                            אם יש צורך בשיפוץ:
                            <ul className="list-disc list-inside mt-4 space-y-2 mr-4">
                                <li>אנחנו מזהים אותו לפני הקנייה</li>
                                <li>מעריכים עלויות</li>
                                <li>ומלווים את התהליך מול קבלנים מקומיים שאנחנו עובדים איתם בעסקאות שלנו</li>
                            </ul>
                        </FAQItem>

                        <FAQItem question="מה קורה לאחר הסגירה? האם אתה מנהל את הנכס?">
                            ברוב המקרים אנחנו דווקא ממליצים לנהל את הנכס באופן עצמאי.
                            נדל״ן טוב מביא שוכרים איכותיים, ובתים איכותיים מתנהלים בצורה פשוטה.

                            הרבה מהבעיות בנדל״ן לא נובעות מניהול עצמי – אלא מנכסים לא נכונים.
                            אם בכל זאת תעדיפו לא לנהל לבד, נחבר אתכם לחברת ניהול מקומית מצוינת, מנוסה ואמינה.
                        </FAQItem>

                        <FAQItem question="מה ההבדל בינך לבין תוכניות אחרות?">
                            אין הבטחות נוצצות ואין “עסקה מושלמת לכולם”.
                            יש שקיפות, התאמה אישית וליווי אמיתי.
                            המטרה שלנו היא לא עסקה אחת – אלא לקוחות רגועים לאורך שנים.
                        </FAQItem>

                        <FAQItem question="מה כולל הליווי?">
                            ליווי מלא מקצה לקצה:
                            אסטרטגיה, נכסים מעולים מתחת למחיר שוק, בדיקות, מימון, רכישה, שיפוץ (אם צריך) ואכלוס.
                        </FAQItem>

                        <FAQItem question="האם אני צריך להגיע פיזית לדאלאס?">
                            לא.
                            כל התהליך יכול להתבצע מרחוק – חתימות, בדיקות, סגירה וניהול.
                            אם תרצו להגיע – מצוין.
                            אם לא – זה עובד גם בלי לעלות על מטוס.
                        </FAQItem>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center bg-slate-50 p-12 md:p-16 rounded-[60px] border border-slate-100">
                        <MessageCircle className="text-gold mx-auto mb-6" size={48} />
                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-8">עדיין יש שאלות?</h2>
                        <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto">
                            אנחנו כאן כדי לענות על הכול ולהבין יחד אם ההשקעה ב-DFW מתאימה לכם.
                        </p>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="bg-gold text-navy px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all"
                        >
                            דברו איתנו עכשיו
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQView;
