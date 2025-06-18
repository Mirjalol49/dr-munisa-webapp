import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../Footer/Footer'
import './Blog.css'
import './BlogPost.css'
import SEOHead from '../../components/SEO/SEOHead'
import { generateBlogPostSchema } from '../../components/SEO/ClinicSchema'

// Blog post data will now be managed through i18n translations
// This object is just for reference and fallback
const blogPostsDefault = {
  'maslahatlar': {
    title: 
`Soch ko‘chirib o‘tkazishdan so‘ng kutilayotgan holatlar: tiklanish, natijalar va foydali maslahatlar'`,
    category: 'Soch',
    date: 'MAY 11, 2025',
    readTime: '3 Minutli o‘qish',
   
    content: `
<p>Agar siz soch ko‘chirib o‘tkazish haqida o‘ylayotgan bo‘lsangiz, tiklanish jarayonini tushunish muolajaning o‘zi kabi muhimdir. Ushbu postda biz sizga soch transplantatsiyasidan keyin nima sodir bo‘lishi va eng yaxshi natijalarga erishish uchun yangi sochlarni qanday parvarish qilish kerakligi haqida gapirib beramiz.</p>
      
      <h2>1. Darhol parvarish</h2>
      <p>Muolajadan keyin davolangan joyda yengil shish, qizarish va qasmoq paydo bo‘lishi tabiiy holat. Shifokoringiz bosh terisini qanday tozalash va sochni qachon qayta yuva boshlash haqida batafsil ko‘rsatmalar beradi. Dastlabki bir necha kun davomida davolangan joyga tegmaslik, uni qashlamaslik va bosh kiyim kiymaslik tavsiya etiladi.</p>
      
      <h2>2. To‘kilish bosqichi</h2>
      <p>Yangi ko‘chirib o‘tkazilgan sochlaringiz 2-3 haftadan so‘ng to‘kila boshlasa, xavotirlanmang - bu mutlaqo tabiiy holat. Bu "shok to‘kilishi" deb ataladi va davolanish jarayonining vaqtinchalik qismi hisoblanadi. Uning o‘rniga yangi, baquvvatroq sochlar o‘sa boshlaydi.</p>
      
      <h2>3. Sochlarning o‘sish muddati</h2>
      <p>• 3-4 oy: ingichka sochlar paydo bo‘la boshlaydi.</p>
<p>• 6 oy: sezilarli yaxshilanish va tolalarning qalinlashishi.</p>
<p>• 12 oy va undan keyin: To'liq natijalar ko'rinadi.</p>
<p>Har kimning sochi har xil tezlikda o‘sadi, lekin bir yoshga to‘lganda bemorlarning ko‘pchiligi tabiiy ko‘rinishga ega bo‘lgan to‘liq sochdan bahramand bo‘ladi.</p>
      
      <h2>4. Tez va sog‘lom tiklanish uchun maslahatlar</h2>
     <p>• Klinikangizning keyingi parvarish bo‘yicha barcha ko‘rsatmalariga to‘liq rioya qiling.</p>
     <p>• Kamida bir hafta davomida og‘ir jismoniy faoliyatdan tiyiling.</p>
     <p>• Yetarli miqdorda suyuqlik iching va sog‘lom ovqatlanishni yo‘lga qo‘ying.</p>
     <p>• Sabr-toqatli bo‘ling — sochlarning o‘sishi vaqt talab etadi.</p>

     <h4>Sochlaringizni qayta tiklash yo‘liga chiqishga tayyormisiz?
Mutaxassislarimizdan biri bilan bepul maslahatlashish uchun bugunoq klinikamizga murojaat qiling.</h4>
    `
  },
  'kochirish-jarayoni': {
    title: 'Soch ko‘chirib o‘tkazish jarayoni og‘riqlimi?',
    category: 'Soch',
    date: 'Aprel 12, 2025',
    readTime: '5 Minutli o‘qish',
    content: `
      <p>Soch ko‘chirib o‘tkazish haqida o‘ylayapsiz-u, ammo og‘riqdan xavotirdamisiz? Siz yolg‘iz emassiz. Ko‘pchilikni muolaja paytida va undan keyin qanday noqulayliklar bo‘lishi mumkinligi qiziqtiradi. Ushbu maqolada siz o‘zingizni ishonchliroq va xabardorroq his qilishingiz uchun buni ochiqchasiga tushuntirib beramiz.</p>
      
      <h2>💉 Muolaja og‘riqli bo‘ladimi?</h2>
      
     <p>Qisqa javob: zamonaviy usullar va mahalliy og‘riqsizlantirish tufayli, deyarli yo‘q.</p>
      
     <p>Ko‘pchilik bemorlar aytishicha, narkoz yuborilayotganda faqat ozgina achishishni his qilishadi. Shundan so‘ng, bu soha sezgisini yo‘qotadi va siz ko‘chirib o‘tkazish jarayonining o‘zida hech qanday og‘riq sezmaysiz.</p>
      
      <h3>🛠️ Protsedura vaqtida (FUE yoki FUT)</h3>
      <p>• FUE (follikulyar birlik ekstraksiyasi): Bemorlar odatda muolaja davomida deyarli hech qanday noqulaylik sezmaydilar. Jarayon bir necha soat davom etishi mumkin, lekin shu vaqt mobaynida siz bemalol dam olishingiz, film tomosha qilishingiz yoki hatto mudrab olishingiz ham mumkin.</p>

      <p>• FUT (follikulyar birlik transferi): Bemorlar odatda muolaja davomida deyarli hech qanday noqulaylik sezmaydilar. Shundan so‘ng, bu soha sezgisini yo‘qotadi va siz ko‘chirib o‘tkazish jarayonining o‘zida hech qanday og‘riq sezmaysiz.</p>

      <p>• FUT (tasma usuli): Siz ba’zi bosim yoki tortilish hislarini sezishingiz mumkin, lekin anesteziya qo‘llanilganligi sababli keskin og‘riq bo‘lmaydi.</p>
      
      <h3>⏱️ Muolajadan so‘ng</h3>
      <p>Anesteziya ta’siri yo‘qolgach (odatda bir necha soatdan so‘ng), quyidagi holatlarni sezishingiz mumkin:</p>

      <p>• Yengil og‘riq</p>
      <p>• Bosh terisida sanchish yoki taranglik hissi</p>

      <p>• Sog‘ayish boshlanishi bilan qichishish</p>

      <p>Bu holatlar vaqtinchalik bo‘lib, odatda dorixonadan retseptsiz olinadigan og‘riq qoldiruvchi dorilar yoki klinikangiz tavsiya etgan dori-darmonlar yordamida bartaraf etiladi.</p>
      
      
      <h3>🩹 Tiklanish qulayligini ta’minlash bo‘yicha maslahatlar</h3>
      <p>• Jarohat yoki operatsiya o‘tkazilgan joyga tegmaslik va uni tirnamaslikka harakat qiling</p>
      <p>• Boshingizni biroz ko‘tarib yotgan holda uxlang</p>
      <p>• Shifokor buyurgan dori-darmonlar va antibiotiklarni belgilangan tartibda qabul qiling</p>
      <h4>Soch ko‘chirib o‘tkazish amaliyoti hozirgi kunda har qachongidan ham qulayroq - va doktor Munisaning mahorati tufayli siz eng ishonchli qo‘llarda bo‘lasiz. Ko‘p yillik tajribasi va muloyim munosabati bilan u har bir bemorning o‘zini xavfsiz his qilishi, ishonch bilan qaralishi va yaxshi parvarish qilinishini ta’minlaydi.</h4>
    `
  },
  'vaqt-jadvali': {
    title: 'Soch ko‘chirib o‘tkazish: oldin va keyingi holat - haqiqiy natijalar qanday bo‘ladi',
    
    date: 'MAY 9, 2025',
    readTime: `6 Minutli o'qish`,
   
    content: `
      
      
      <h2>🧑‍⚕️ Jarayondan oldin: rejalashtirish va baholash</h2>

      <p>Har qanday amaliyot boshlanishidan avval, doktor Munisa sizning soch to‘kilish holatini, bosh terisi sog‘lig‘ini va donor sohangizni tekshirish uchun batafsil maslahat o‘tkazadi. Siz birgalikda tabiiy ko‘rinadigan va yuz shaklingizga mos keladigan soch chizig‘ini yaratish ustida ishlaysiz.</p>
      
      <h3>🛠️ Jarayonning o‘zi</h3>
      <p>Transplantat (FUE yoki DHI) mahalliy og‘riqsizlantirish ostida amalga oshiriladi. Ko‘pchilik bemorlar minimal noqulaylik his qilishadi va jarayonning qanchalik osongina o‘tishidan hayratda qolishadi. Siz bemalol dam olishingiz, musiqa tinglashingiz yoki telefoningizni ko‘rib chiqishingiz mumkin.</p>
      
      <h3>📆 3. Keyin nima bo‘ladi? Vaqt jadvali</h3>
      <p>• 1-hafta: Terining qizarishi yo‘qoladi, kichik qo‘tirlar to‘kiladi.</p>

      <p>• 1 oy: Ko‘chirib o‘tkazilgan sochlar to‘kiladi — bu mutlaqo tabiiy holat.</p>

      <p>• 3-4 oy: Yangi sochlar o‘sa boshlaydi.</p>

      <p>• 6-8 oy: Sochlar qalinroq va tabiiyroq ko‘rinishga ega bo‘ladi.</p>

      <p>• 12 oy va undan keyin: Yakuniy natija — sochlaringiz avvalgidek tabiiy ko‘rinishga ega bo‘ladi.</p>
      
     <h4>Soch ko‘chirib o‘tkazish amaliyoti chindan ham samara beradimi degan savolni o‘ylab yurgan bo‘lsangiz - natijalar o‘zi gapiradi. Doktor Munisaning mohir qo‘llari va shaxsiy yondashuvlari bilan, siz tabiiy ko‘rinadigan va uzoq muddat saqlanadigan natijalarni ko‘rasiz.</h4>
      
    `
  }
};

const BlogPost = () => {

  const { postId } = useParams();
  const { t, i18n } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const blogContentRef = useRef(null);
  const [shareUrl, setShareUrl] = useState('');
  const [blogData, setBlogData] = useState(null);
  
  // Direct access to blog post data without using t() function
  const getDirectBlogPost = useRef((currentLanguage) => {
    try {
      // Get the raw translations object for the current language
      const translations = i18n.getDataByLanguage(currentLanguage);
      if (!translations) return null;
      
      console.log('Current language:', currentLanguage);
      console.log('Current postId:', postId);
      
      // Direct mapping of post IDs across languages
      // All languages use the same keys for blog posts
      const postMapping = {
        'maslahatlar': 'maslahatlar',
        'kochirish-jarayoni': 'kochirish-jarayoni',
        'vaqt-jadvali': 'vaqt-jadvali'
      };
      
      const mappedPostId = postMapping[postId] || postId;
      
      // Direct access to the translation data
      const blogPostData = translations.translation?.blogPosts?.[mappedPostId];
      console.log('Found blog post data:', blogPostData ? 'yes' : 'no');
      
      // If we found the blog post in the current language
      if (blogPostData && blogPostData.content) {
        return {
          title: blogPostData.title || '',
          category: blogPostData.category || '',
          date: blogPostData.date || '',
          readTime: blogPostData.readTime || '',
          content: blogPostData.content || ''
        };
      }
      
      // If content is missing in the current language, try to find it in other languages
      if (blogPostData && !blogPostData.content) {
        console.log('Content missing in current language, checking others');
        
        // Try Uzbek (default language) if not already checking it
        if (currentLanguage !== 'uz') {
          const uzTranslations = i18n.getDataByLanguage('uz');
          if (uzTranslations?.translation?.blogPosts?.[mappedPostId]?.content) {
            const uzBlogPost = uzTranslations.translation.blogPosts[mappedPostId];
            // Use content from Uzbek but keep metadata from current language
            return {
              title: blogPostData.title || uzBlogPost.title || '',
              category: blogPostData.category || uzBlogPost.category || '',
              date: blogPostData.date || uzBlogPost.date || '',
              readTime: blogPostData.readTime || uzBlogPost.readTime || '',
              content: uzBlogPost.content
            };
          }
        }
        
        // If still no content, try English
        if (currentLanguage !== 'en') {
          const enTranslations = i18n.getDataByLanguage('en');
          if (enTranslations?.translation?.blogPosts?.[mappedPostId]?.content) {
            const enBlogPost = enTranslations.translation.blogPosts[mappedPostId];
            // Use content from English but keep metadata from current language
            return {
              title: blogPostData.title || enBlogPost.title || '',
              category: blogPostData.category || enBlogPost.category || '',
              date: blogPostData.date || enBlogPost.date || '',
              readTime: blogPostData.readTime || enBlogPost.readTime || '',
              content: enBlogPost.content
            };
          }
        }
      }
      
      // Fallback to default content if nothing found in any language
      return blogPostsDefault[postId];
    } catch (error) {
      console.error('Error getting blog post:', error);
      return null;
    }
  }).current;
  
  // We now use the state variable instead of calling the function directly
  // blogData is set in the useEffect
  
  // Set share URL when component mounts
  useEffect(() => {
    // Get the current URL for sharing
    const currentUrl = window.location.href;
    setShareUrl(currentUrl);
  }, [postId]);
  
  // Update content when language changes
  useEffect(() => {
    // Get blog post data directly from translations
    const post = getDirectBlogPost(i18n.language);
    setBlogData(post);
    
    // Update the HTML content
    if (blogContentRef.current && post && post.content) {
      blogContentRef.current.innerHTML = post.content;
    }
    
    // This effect should run whenever language changes
  }, [i18n.language, postId, getDirectBlogPost]);
  
  // Share to Telegram function
  const shareToTelegram = () => {
    if (!blogData) return;
    
    // Format post title and URL for sharing
    const title = encodeURIComponent(blogData.title);
    const url = encodeURIComponent(shareUrl);
    
    // Create Telegram share URL
    const telegramShareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
    
    // Open in new window
    window.open(telegramShareUrl, '_blank', 'noopener,noreferrer');
  };
  

  
  // Optimize image loading
  useEffect(() => {
    // Function to optimize images
    const optimizeImages = () => {
      if (!blogContentRef.current) return;
      
      const images = blogContentRef.current.querySelectorAll('img');
      
      images.forEach(img => {
        // Add loading="lazy" for images not in the viewport
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
        
        if (!img.complete) {
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.3s ease';
          
          img.onload = () => {
            img.style.opacity = '1';
          };
        }
      });
    };
    
    // Check images after a small delay to ensure DOM is ready
    const initTimer = setTimeout(optimizeImages, 100);
    
    // Cleanup
    return () => {
      clearTimeout(initTimer);
    };
  }, []);
  
  // Calculate scroll progress based on blog content height
  useEffect(() => {
    let rafId = null;
    
    // Use requestAnimationFrame for smoother scroll updates
    const updateProgress = () => {
      rafId = null;
      if (!blogContentRef.current) return;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      
      // Update scroll progress state
      setScrollProgress(Math.min(scrollPercentage, 100));
    };
    
    // Throttled scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (rafId) return; // Skip if a frame is already scheduled
      
      rafId = requestAnimationFrame(() => {
        updateProgress();
        rafId = null;
      });
    };
    
    // Initial calculation
    updateProgress();
    
    // Add event listeners with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [scrollProgress]);

  // ...

  // Create structured data for this blog post
  const jsonLd = generateBlogPostSchema({
    title: blogData?.title || '',
    slug: postId,
    publishDate: blogData?.date || '2025-06-18',
    author: 'Dr. Munisa',
    excerpt: blogData?.excerpt || '',
    featuredImage: '/images/blog/hair-transplant-process.jpg'
  });

  return (
    <>
      <SEOHead
        title={blogData?.title + ' | Dr Munisa Clinic'}
        description={blogData?.excerpt || 'Soch ko\'chirib o\'tkazish jarayoni, tiklanish muddati va natijalar haqida muhim ma\'lumotlar.'}
        canonicalUrl={`https://dr-munisa.uz/blog/${postId}`}
        ogType="article"
        ogImage="/images/blog/hair-transplant-process.jpg"
        jsonLd={jsonLd}
      />
      <div className="blog-post-page">
        {/* Share button positioned absolutely */}
        <button className="share-button-large" onClick={shareToTelegram}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#0a0f30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#0a0f30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#0a0f30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.59 13.51L15.42 17.49" stroke="#0a0f30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.41 6.51L8.59 10.49" stroke="#0a0f30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('blog.share', 'Share')}
        </button>
        
        <div className="blog-post-header">
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <div className="container">
            <div className="header-controls">
              <Link to="/blog" className="back-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t('blog.back', 'Back')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="blog-post-content-wrapper">
          <div className="container">
            {blogData ? (
              <>
                <h1 className="blog-post-title">{blogData.title}</h1>
                
                <div className="blog-post-meta">
                  <div className="blog-post-date">{blogData.date} | {blogData.readTime}</div>
                  <div className="blog-post-category">{blogData.category}</div>
                </div>
                
                <div 
                  ref={blogContentRef}
                  className="blog-post-content" 
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                ></div>
              </>
            ) : (
              <>
                <h1>{t('blog.postNotFound', 'Blog Post Not Found')}</h1>
                <p>{t('blog.postNotFoundMessage', "Sorry, the blog post you're looking for doesn't exist.")}</p>
              </>
            )}
            
            <div className="blog-post-contact">
              <h3>{t('blog.freeConsultation', 'For a free consultation')}</h3>
              <p>{t('blog.contactSpecialist', 'Call the following number to connect with one of our specialists:')}</p>
              <a href="tel:+998949590000" className="contact-button">+998 94 959 0000</a>
              <p className="contact-note">{t('blog.workingHours', 'Working hours: Monday-Saturday, 9:00 - 18:00')}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
