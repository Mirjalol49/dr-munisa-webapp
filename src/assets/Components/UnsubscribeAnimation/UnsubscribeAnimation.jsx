import React, { useEffect } from 'react';
/* CSS import */
import './UnsubscribeAnimation.css';

const UnsubscribeAnimation = ({ type = 'success', onGoBack }) => {
  useEffect(() => {
    // Initialize animations when component mounts
    (() => {
      const select = (el) => document.getElementById(el);
      
      // Get all the SVG elements we need to animate
      const envelope = select("envelope");
      const eyeGroup = select("eye-group");
      const mouthWorry = select("mouth-worry");
      const mouthSad = select("mouth-sad");
      const eyeLeft = select("eye-left");
      const eyeRight = select("eye-right");
      const eyeLaughingLeft = select("eye-laughing-left");
      const eyeLaughingRight = select("eye-laughing-right");
      const eyebrowHappyLeft = select("eyebrow-happy-left");
      const eyebrowHappyRight = select("eyebrow-happy-right");
      const eyebrowSadLeft = select("eyebrow-sad-left");
      const eyebrowSadRight = select("eyebrow-sad-right");
      const openMouth = select("open-mouth");
      const tongue = select("tongue");
      
      const confettis = document.querySelectorAll('#confetti > *');
      
      // Initialize animation based on type
      if (type === 'success') {
        // Show happy face for success
        
        // Morphing eyes to laughing state
        if (eyeLeft && eyeRight) {
          eyeLeft.style.display = 'none';
          eyeRight.style.display = 'none';
          
          if (eyeLaughingLeft && eyeLaughingRight) {
            eyeLaughingLeft.style.display = 'block';
            eyeLaughingRight.style.display = 'block';
          }
        }
        
        // Show happy mouth
        if (mouthWorry && openMouth) {
          mouthWorry.style.display = 'none';
          openMouth.style.display = 'block';
          if (tongue) tongue.style.display = 'block';
        }
        
        // Show happy eyebrows
        if (eyebrowSadLeft && eyebrowSadRight && eyebrowHappyLeft && eyebrowHappyRight) {
          eyebrowSadLeft.style.display = 'none';
          eyebrowSadRight.style.display = 'none';
          eyebrowHappyLeft.style.display = 'block';
          eyebrowHappyRight.style.display = 'block';
        }
        
        // Animate confetti
        confettis.forEach((el) => {
          el.style.display = 'block';
          const angle = Math.random() * 360;
          const delay = Math.random() * 6;
          const posX = Math.cos(angle * Math.PI / 180) * 250;
          const posY = Math.sin(angle * Math.PI / 180) * 250;
          
          el.style.transition = `transform 3s ease-out ${delay}s`;
          el.style.transform = `translate(${posX}px, ${posY}px) rotate(360deg)`;
          el.style.opacity = 1;
        });
        
        // Animate envelope jumping
        if (envelope) {
          let jumpCount = 0;
          const jumpInterval = setInterval(() => {
            if (jumpCount >= 5) {
              clearInterval(jumpInterval);
              return;
            }
            
            envelope.style.transition = 'transform 0.15s ease-in-out';
            envelope.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
              envelope.style.transform = 'translateY(0)';
            }, 150);
            
            jumpCount++;
          }, 1000);
        }
      } else {
        // Show sad face for unsubscribe
        if (mouthWorry && mouthSad) {
          mouthWorry.style.display = 'none';
          mouthSad.style.display = 'block';
        }
        
        if (eyeGroup) {
          eyeGroup.style.transform = 'translateY(15px)';
        }
        
        if (eyebrowSadLeft && eyebrowSadRight) {
          eyebrowSadLeft.style.transform = 'translateY(10px)';
          eyebrowSadRight.style.transform = 'translateY(10px)';
        }
        
        // Animate envelope shaking
        if (envelope) {
          let shakeCount = 0;
          const shakeInterval = setInterval(() => {
            if (shakeCount >= 10) {
              clearInterval(shakeInterval);
              return;
            }
            
            envelope.style.transition = 'transform 0.1s ease-in-out';
            envelope.style.transform = shakeCount % 2 === 0 ? 'translateX(-1px)' : 'translateX(1px)';
            
            shakeCount++;
          }, 100);
        }
      }
    })();
    
    // Initialize eye following
    const cleanup = (() => {
      const eyes = document.querySelectorAll(".eyes");
      let cursorPos = { x: 0, y: 0 };
      
      const mousemoveHandler = (e) => {
        cursorPos = {
          x: e.clientX,
          y: e.clientY
        };
        
        eyes.forEach((el) => {
          moveEye(el);
        });
      };
      
      function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY
        };
      }
      
      function moveEye(eye) {
        const eyeOffset = getOffset(eye);
        const bBox = eye.getBBox();
        const centerX = eyeOffset.x + bBox.width / 2;
        const centerY = eyeOffset.y + bBox.height / 2;
        const percentTop = Math.round((cursorPos.y - centerY) * 100 / window.innerHeight);
        const percentLeft = Math.round((cursorPos.x - centerX) * 100 / window.innerWidth);
        eye.style.transform = `translate(${percentLeft/5}px, ${percentTop/5}px)`;
      }
      
      window.addEventListener("mousemove", mousemoveHandler);
      
      return () => {
        window.removeEventListener("mousemove", mousemoveHandler);
      };
    })();
    
    // Cleanup function
    return () => {
      if (cleanup) cleanup();
    };
  }, [type]);

  return (
    <div className="animation-container">
      <div className="inner-container">
        <svg id="svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 484.7">
          <g id="blobs">
            <path id="blob-1" d="M545.5,299c0,80.3-28.6,150.4-126.4,139.4-63.2-7.1-109.3-37.3-142.6-37.3-45.7,0-105.4,29.3-146.8,22.2-69-11.7-85.3-66.8-85.3-135.8,0-56.3,25.5-99.9,46.2-140.8,18.3-36.1,55.9-97.8,125.1-100.5,53.3-2.1,97.4,50.5,138.4,74.2,49.9,28.8,98.4-1.8,126,1.3C537.9,127.9,545.5,265.5,545.5,299Z" fill="#e8dfed"/>
            <path id="blob-3" d="M55.1,300.7c0,80.3,27.4,150.4,121,139.4,60.5-7.1,104.7-37.3,136.5-37.3,43.8,0,100.9,29.3,140.5,22.2,66-11.7,81.7-66.8,81.7-135.8,0-56.3-16.2-103.6-36.1-144.5-17.6-36.1-54.9-97.4-121.2-100.1-51-2.1-100.1,53.8-139.4,77.5-47.8,28.8-94.3-1.8-120.7,1.3C62.4,129.6,55.1,267.1,55.1,300.7Z" fill="#e8dfed"/>
          </g>
          <g id="confetti" className="confetti">
            <rect x="284" y="230.4" width="17.7" height="17.67" rx="4" ry="4" fill="#8F7DE8"/>
            <rect x="285.4" y="231.7" width="17.7" height="17.67" rx="4" ry="4" fill="#fff"/>
            <rect x="285.4" y="230.1" width="17.7" height="17.67" rx="4" ry="4" fill="#77F6AA"/>
            <rect x="285.4" y="231.7" width="17.7" height="17.67" rx="4" ry="4" fill="#e8dfed"/>
            <circle cx="294.1" cy="241.3" r="9.7" fill="#8F7DE8"/>
            <circle cx="294.1" cy="243.6" r="12" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2"/>
            <circle cx="294.2" cy="243.6" r="12" fill="#fff"/>
            <circle cx="294.2" cy="243.6" r="12" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2"/>
            <circle cx="294.2" cy="243.6" r="12" fill="none" stroke="#77F6AA" strokeMiterlimit="10" strokeWidth="2"/>
            <circle cx="295.9" cy="242.1" r="12" fill="none" stroke="#8F7DE8" strokeMiterlimit="10" strokeWidth="2"/>
            <circle cx="294.1" cy="241.3" r="9.7" fill="#77F6AA"/>
            <circle cx="292.9" cy="241.3" r="9.7" fill="#fff"/>
            <circle cx="294.1" cy="241.3" r="9.7" fill="#8F7DE8"/>
            <path d="M300.9,243.2l-3-3a1.5,1.5,0,0,1,0-2.1l3-3a2,2,0,0,0,.3-2.5,1.9,1.9,0,0,0-2.9-.3l-3.1,3.1a1.5,1.5,0,0,1-2.1,0l-3-3a2,2,0,0,0-2.5-.3,1.9,1.9,0,0,0-.3,2.9l3.1,3.1a1.5,1.5,0,0,1,0,2.1l-3,3a2,2,0,0,0-.3,2.5,1.9,1.9,0,0,0,2.9.3l3.1-3.1a1.5,1.5,0,0,1,2.1,0l3.1,3.1a1.9,1.9,0,0,0,2.9-.3A2,2,0,0,0,300.9,243.2Z" fill="#e8dfed"/>
            <path d="M300.9,243.2l-3-3a1.5,1.5,0,0,1,0-2.1l3-3a2,2,0,0,0,.3-2.5,1.9,1.9,0,0,0-2.9-.3l-3.1,3.1a1.5,1.5,0,0,1-2.1,0l-3-3a2,2,0,0,0-2.5-.3,1.9,1.9,0,0,0-.3,2.9l3.1,3.1a1.5,1.5,0,0,1,0,2.1l-3,3a2,2,0,0,0-.3,2.5,1.9,1.9,0,0,0,2.9.3l3.1-3.1a1.5,1.5,0,0,1,2.1,0l3.1,3.1a1.9,1.9,0,0,0,2.9-.3A2,2,0,0,0,300.9,243.2Z" fill="#8F7DE8"/>
            <path d="M300.9,243.2l-3-3a1.5,1.5,0,0,1,0-2.1l3-3a2,2,0,0,0,.3-2.5,1.9,1.9,0,0,0-2.9-.3l-3.1,3.1a1.5,1.5,0,0,1-2.1,0l-3-3a2,2,0,0,0-2.5-.3,1.9,1.9,0,0,0-.3,2.9l3.1,3.1a1.5,1.5,0,0,1,0,2.1l-3,3a2,2,0,0,0-.3,2.5,1.9,1.9,0,0,0,2.9.3l3.1-3.1a1.5,1.5,0,0,1,2.1,0l3.1,3.1a1.9,1.9,0,0,0,2.9-.3A2,2,0,0,0,300.9,243.2Z" fill="#77F6AA"/>
            <path d="M300.9,243.2l-3-3a1.5,1.5,0,0,1,0-2.1l3-3a2,2,0,0,0,.3-2.5,1.9,1.9,0,0,0-2.9-.3l-3.1,3.1a1.5,1.5,0,0,1-2.1,0l-3-3a2,2,0,0,0-2.5-.3,1.9,1.9,0,0,0-.3,2.9l3.1,3.1a1.5,1.5,0,0,1,0,2.1l-3,3a2,2,0,0,0-.3,2.5,1.9,1.9,0,0,0,2.9.3l3.1-3.1a1.5,1.5,0,0,1,2.1,0l3.1,3.1a1.9,1.9,0,0,0,2.9-.3A2,2,0,0,0,300.9,243.2Z" fill="#fff"/>
          </g>
          <g id="envelope">
            <path id="Background" d="M452.9,376.3a26.1,26.1,0,0,1-25.5,20.8H162.6a26.1,26.1,0,0,1-26-26V193.2a26.1,26.1,0,0,1,26-26H427.4a26.1,26.1,0,0,1,26,26V371.1a25.9,25.9,0,0,1-.5,5.2" fill="#77F6AA" stroke="#8F7DE8" strokeMiterlimit="10" strokeWidth="5"/>
            <g id="paper-group">
              <rect id="paper" x="157.3" y="87.6" width="275.3" height="266.33" rx="26" ry="26" fill="#fff" stroke="#8F7DE8" strokeMiterlimit="10" strokeWidth="5"/>
              <g id="face">
                <g id="mouth">
                  <path id="mouth-scared" d="M275,220a18.7,18.7,0,0,1,35.9.1" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" style={{display: 'none'}}/>
                  <path id="mouth-sad" d="M258.8,231.9c3.9-14.5,17.7-25.2,34-25.2s30.3,10.8,34.1,25.4" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" style={{display: 'none'}}/>
                  <path id="mouth-worry" d="M271.1,218.7c10-11.1,28.2-15,43.6-9.4" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                  <path id="mouth-happy" d="M259.3,207c3.9,14.5,17.7,25.2,34,25.2s30.3-10.8,34.1-25.4" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" style={{display: 'none'}}/>
                  <g id="mouth-laughing" style={{display: 'none'}}>
                    <path id="open-mouth" d="M323.8,208.3c3.9,0,6.7,3.9,5.9,7.9a37.5,37.5,0,0,1-73.5,0c-0.9-4.1,2-7.9,5.9-7.9h61.7Z" fill="#8F7DE8" opacity="0.98"/>
                    <path id="tongue" d="M293.2,241.1c6.9,0,13.1-2.3,17.3-5.9a2.1,2.1,0,0,0,.5-2.6c-3.1-5.8-9.9-9.8-17.8-9.8s-14.7,4-17.8,9.8a2.1,2.1,0,0,0,.5,2.5C280,238.8,286.2,241.1,293.2,241.1Z" fill="#77F6AA"/>
                  </g>
                </g>
                <g id="eye-group">
                  <g id="eyes" className="eyes">
                    <ellipse id="eye-right" cx="349" cy="172.8" rx="11.2" ry="13.8" fill="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                    <ellipse id="eye-left" cx="235.5" cy="172.8" rx="11.2" ry="13.8" fill="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                    <path id="eyebrow-sad-right" d="M341.9,133.7c2.6,5.3,14.8,14.1,24.3,14.7" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                    <path id="eyebrow-sad-left" d="M240.7,133.7c-2.6,5.3-14.8,14.1-24.3,14.7" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                  </g>
                  <g id="eyes-laughing" style={{display: 'none'}}>
                    <path id="eye-laughing-right" d="M332.2,174c0-8.3,7.5-15,16.8-15s16.8,6.7,16.8,15" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                    <path id="eye-laughing-left" d="M218.7,174c0-8.3,7.5-15,16.8-15s16.8,6.7,16.8,15" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                  </g>
                  <g id="eyebrows-happy" style={{display: 'none'}}>
                    <path id="eyebrow-happy-right" d="M366.2,146.3c-2.6-5.3-14.8-14.1-24.3-14.7" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                    <path id="eyebrow-happy-left" d="M216.4,146.3c2.6-5.3,14.8-14.1,24.3-14.7" fill="none" stroke="#8F7DE8" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5"/>
                  </g>
                </g>
              </g>
            </g>
            <path id="back" d="M451.9,186.7S322.4,288.2,313.4,294.1s-27,5.8-36.9,0S137.9,186.5,137.9,186.5a23.6,23.6,0,0,0-1.3,6.7V371.1a26.1,26.1,0,0,0,26,26H427.4a26,26,0,0,0,26-26V193.2C453.4,190.7,452.5,188.9,451.9,186.7Z" fill="#e8dfed" stroke="#8F7DE8" strokeMiterlimit="10" strokeWidth="5"/>
            <g id="shadow">
              <path id="shadow-3" d="M263.3,279.7s11.3-8.1,13.1-9.3c9.9-6.5,27-5.8,36.9,0,1.7,1,13.5,9.3,13.5,9.3" fill="none" stroke="#eddfeb" strokeLinejoin="bevel" strokeWidth="7"/>
              <path id="shadow-2" d="M430.2,193.3L313.4,282.2a26.1,26.1,0,0,1-36.8,0L159.8,193.3V201l116.8,90.6c7.9,5.7,26.9,6.4,37,0l116.6-90.9v-7.4Z" fill="#eddfeb"/>
            </g>
            <path id="shadow-1" d="M425.2,381.5h-262c-14.1,0-24.2-11-24.2-24.4v13.2c0,13.4,10.1,24.3,24.2,24.3h262c12.7,1.2,23.9-8.4,25.2-19.5a42.8,42.8,0,0,0,.5-4.9V358.1a14.7,14.7,0,0,1-.5,3.9C448,373.1,437.6,381.5,425.2,381.5Z" fill="#77F6AA" opacity="0.5"/>
            <g id="Front">
              <path id="Front-2" data-name="Front" d="M139.8,381.9s127.5-99.5,136.5-105.4,27-5.8,36.9,0S449.8,382.1,449.8,382.1" fill="none" stroke="#8F7DE8" strokeMiterlimit="10" strokeWidth="5"/>
              <path id="Front-3" data-name="Front" d="M225.4,315.3s41.9-33,51-38.9,27-5.8,36.9,0S355,307.9,355,307.9" fill="#e8dfed" stroke="#8F7DE8" strokeMiterlimit="10" strokeWidth="5"/>
            </g>
          </g>
        </svg>

        <div className="bottom">
          <h2 className="title">
            {type === 'success' 
              ? 'Rahmat, so\'rovingiz qabul qilindi!' 
              : 'Obunadan voz kechmoqchimisiz?'}
          </h2>
          <p className="subtitle">
            {type === 'success'
              ? 'Tez orada siz bilan bog\'lanamiz.'
              : 'Agar obunadan voz kechsangiz, bizning haftalik yangiliklarimizni olishni to\'xtatasiz.'}
          </p>
          <div className="buttons">
            {type === 'success' ? (
              <button id="go-back" onClick={onGoBack}>Orqaga</button>
            ) : (
              <>
                <button id="unsubscribe">Obunadan voz kechish</button>
                <button id="cancel">Bekor qilish</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsubscribeAnimation;
