import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Blog.css'
import './BlogPost.css'

// Sample blog post data
const blogPosts = {
  'dispenser-water': {
    title: 
`Soch ko‘chirib o‘tkazishdan so‘ng kutilayotgan holatlar: tiklanish, natijalar va foydali maslahatlar'`,
    category: 'Soch',
    date: 'MAY 11, 2025',
    readTime: '5 Minutli o‘qish',
   
    content: `
<p>Agar siz soch ko‘chirib o‘tkazish haqida o‘ylayotgan bo‘lsangiz, tiklanish jarayonini tushunish muolajaning o‘zi kabi muhimdir. Ushbu postda biz sizga soch transplantatsiyasidan keyin nima sodir bo‘lishi va eng yaxshi natijalarga erishish uchun yangi sochlarni qanday parvarish qilish kerakligi haqida gapirib beramiz.</p>
      
      <h2>1. Darhol parvarish</h2>
      <p>Muolajadan keyin davolangan joyda yengil shish, qizarish va qasmoq paydo bo‘lishi tabiiy holat. Shifokoringiz bosh terisini qanday tozalash va sochni qachon qayta yuva boshlash haqida batafsil ko‘rsatmalar beradi. Dastlabki bir necha kun davomida davolangan joyga tegmaslik, uni qashlamaslik va bosh kiyim kiymaslik tavsiya etiladi.</p>
      
      <h2>2. To‘kilish bosqichi</h2>
      <p>Yangi ko‘chirib o‘tkazilgan sochlaringiz 2-3 haftadan so‘ng to‘kila boshlasa, xavotirlanmang - bu mutlaqo tabiiy holat. Bu "shok to‘kilishi" deb ataladi va davolanish jarayonining vaqtinchalik qismi hisoblanadi. Uning o‘rniga yangi, baquvvatroq sochlar o‘sa boshlaydi.</p>
      
      <h2>3. Sochlarning o‘sish muddati</h2>
      <p>• 3-4 oy: ingichka sochlar paydo bo‘la boshlaydi.</p>
<p>• 6 oy: sezilarli yaxshilanish va tolalarning qalinlashishi.</p>
<p>• 12 oy va undan<keyin: To‘liq natijalar ko‘rinadi.</p>
<p>Har kimning sochi har xil tezlikda o‘sadi, lekin bir yoshga to‘lganda bemorlarning ko‘pchiligi tabiiy ko‘rinishga ega bo‘lgan to‘liq sochdan bahramand bo‘ladi.</p>
      
      <h2>4. Tez va sog‘lom tiklanish uchun maslahatlar</h2>
     <p>• Klinikangizning keyingi parvarish bo‘yicha barcha ko‘rsatmalariga to‘liq rioya qiling.</p>
     <p>• Kamida bir hafta davomida og‘ir jismoniy faoliyatdan tiyiling.</p>
     <p>• Yetarli miqdorda suyuqlik iching va sog‘lom ovqatlanishni yo‘lga qo‘ying.</p>
     <p>• Sabr-toqatli bo‘ling — sochlarning o‘sishi vaqt talab etadi.</p>

     <h3>Sochlaringizni qayta tiklash yo‘liga chiqishga tayyormisiz?
Mutaxassislarimizdan biri bilan bepul maslahatlashish uchun bugunoq klinikamizga murojaat qiling.</h3>
    `
  },
  'cooking-gas': {
    title: '5 Signs It\'s Time to Refill Your Cooking Gas',
    category: 'Home',
    date: 'MAY 10TH, 2025',
    readTime: '5 Min read',
    icon: '🔥',
    content: `
      <p>Running out of cooking gas in the middle of a meal is never fun. Thankfully, there are clear signs that let you know it's time to refill. If your burner flame is weaker than usual or starts turning yellow instead of blue, it could be a sign of low gas pressure. Another indicator is time—if it's been over three to four weeks since your last refill, you're likely due for another.</p>
      
      <h2>Key Signs Your Cooking Gas Is Low</h2>
      
      <h2>1. Weak Flame</h2>
      <p>A noticeably weaker flame than usual is often the first sign that your gas cylinder is running low.</p>
      
      <h2>2. Yellow Flame</h2>
      <p>If your flame turns yellow instead of the usual blue, this indicates incomplete combustion often caused by low gas pressure.</p>
      
      <h3>3. Time Since Last Refill</h3>
      <p>Most households need to refill their cooking gas every 3-4 weeks with regular use.</p>
      
      <h3>4. Sound Check</h3>
      <p>You can do a quick check by tapping the cylinder lightly; a hollow sound often means the gas level is low.</p>
      
      <h3>5. Cooking Takes Longer</h3>
      <p>If your usual recipes are taking longer to cook, this could indicate that your gas pressure is decreasing.</p>
    `
  },
  'wellness-program': {
    title: 'How To Start A Wellness Program At Work',
    category: 'Workplace',
    date: 'MAY 9TH, 2025',
    readTime: '6 Min read',
    icon: '❤️',
    content: `
      <p>Creating an effective workplace wellness program requires careful planning and consideration of employee needs. A well-designed program can lead to healthier employees, reduced healthcare costs, and a more positive work environment.</p>
      
      <h2>Steps to Implement a Workplace Wellness Program</h2>
      
      <h3>1. Assess Employee Needs</h3>
      <p>Begin by surveying employees to understand their wellness priorities and interests. This will help you design a program that addresses their specific needs.</p>
      
      <h3>2. Set Clear Objectives</h3>
      <p>Define what you hope to achieve with your wellness program. Common objectives include reducing absenteeism, improving morale, and promoting healthier lifestyles.</p>
      
      <h3>3. Secure Leadership Support</h3>
      <p>Gain buy-in from company leadership to ensure adequate resources and support for your program.</p>
      
      <h3>4. Develop Program Components</h3>
      <p>Based on employee feedback and program objectives, develop specific components such as fitness activities, mental health resources, and nutrition education.</p>
      
      <h3>5. Promote and Launch</h3>
      <p>Create a communication plan to promote the program and generate excitement among employees.</p>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts[postId];
  
  if (!post) {
    return (
      <>
        <div className="blog-post-page">
          <div className="container">
            <Link to="/blog" className="back-button">← Back to Blog</Link>
            <div className="blog-post-content">
              <h1>Blog Post Not Found</h1>
              <p>Sorry, the blog post you're looking for doesn't exist.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <div className="blog-post-page">
        <div className="blog-post-header">
          <div className="container">
            <Link to="/blog" className="back-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </Link>
            
            <div className="share-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="blog-post-content-wrapper">
          <div className="container">
            <h1 className="blog-post-title">{post.title}</h1>
            
            <div className="blog-post-meta">
              <div className="blog-post-date">{post.date} | {post.readTime}</div>
            
             
              <div className="blog-post-category">{post.category}</div>
            </div>
            
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            <div className="blog-post-contact">
              <h3>Bepul konsultatsiya olish uchun</h3>
              <p>Mutaxassislarimizdan biri bilan bog'lanish uchun quyidagi raqamga qo'ng'iroq qiling:</p>
              <a href="tel:+998949590000" className="contact-button">+998 94 959 0000</a>
              <p className="contact-note">Ish vaqti: Dushanba-Shanba, 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
