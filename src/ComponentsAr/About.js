import React from 'react';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import aboutImage from './../icons/about-plant.png';
import Carousel from 'react-bootstrap/Carousel';
import fahad from './../icons/fahad.jpeg';
import nawaf from './../icons/nawaf.jpeg';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import Footer from './Footer';

function About(props) {

    return (
        <>
        <NavigationBar />
        <Container style={{marginTop:'65px',padding:'65px 35px 35px 35px',background:'rgb(237 239 243 / 68%)',borderRadius:'35px'}}>
            <div className='m-auto text-center'>
                <img className='  text-center mb-4' src={aboutImage} style={{width:'156px',height:'156px'}} />
                <br />
                <h1 className=' d-inline mb-3' style={{fontWeight:'lighter',fontSize:'3.5em',color: '#3d4460'}}>عن نبتة</h1>
            </div>
            
            
            <p className='mb-3' style={{textAlign:'right',marginTop:'50px',fontSize:'1.25rem'}}>VGG-19 نبتة هو نظام مبني بأستخدام خوارزميات تـعـلّم الآلـة لإكـتشـاف أمراض النبات وإقتراح خطة علاجـيّـة لتلك النبتـة، الـنـظـام مـشـغّـل بـواسـطـة خـوارزمـيـة 
            <br/>
             وهي شـبـكة عـصـبونـيّـة إلـتفـافـيّـة تستخدم 19 طـبـقـة، مدربة على  
            <a href='https://paperswithcode.com/dataset/plantvillage' target="_blank" style={{textDecoration:'None'}}> مجموعة بيانات لأمراض النبات</a>.
            نبتة هو مشروع التخرج لدرجة البكالوريوس في جامعة الملك سعود قسم هندسة البرمجيات. جميع الخطط العلاجيّة مستوحات من
            <a href='https://www.gardeningknowhow.com/' target='_blank' style={{textDecoration:'None'}}> "چاردنينق نو هاو"  
            </a> 
             وهو موقع إلكتروني يهدف الى مساعدة الناس على زراعة النبات، موفرًا كمية ضخمة من البيانات على أنواع النبات وأمراضها وكذلك إقتراح خطط علاجيّة
             </p>
            
            <h1 className='mb-5' style={{fontWeight:'lighter',fontSize:'3.5em',color: '#3d4460',marginTop:'105px',textAlign:'center'}}>عن الفريق</h1>
            <Carousel variant="dark" interval={null}>
                <Carousel.Item >
                    <img
                    className="d-block m-auto"
                    src={fahad}
                    alt="First slide"
                    style={{width:'256px',height:'256px',borderRadius:'75px'}}
                    />
                 <Carousel.Caption className='m-3 text-center' style={{position:'static'}}>
                    <h2 className='mb-3' style={{fontWeight:'lighter'}} >فهد عبدالله العريك</h2>
                    <p className='Poppins mb-3 mt-2' style={{color: '#3d4460',fontWeight:'bold'}}>مدير المشروع, مهندس برمجيات, مطور واجهات خلفية وأمامية</p>
                    <p> <a href='https://www.linkedin.com/in/fahad-al-araik-6a3676225/' className='p-2 about-icon'><BsLinkedin style={{height:'24px',width:'24px'}}/></a> 
                        <a href='https://twitter.com/fahad_alaraik' className='p-2 about-icon'><BsTwitter style={{height:'24px',width:'24px'}}/></a>
                     </p>
                    </Carousel.Caption>

                </Carousel.Item>

                {/* */}

                <Carousel.Item>
                    <img
                    className="d-block m-auto"
                    src={nawaf}
                    alt="First slide"
                    style={{width:'256px',height:'256px',borderRadius:'75px'}}
                    />
                 <Carousel.Caption className='m-3 text-center' style={{position:'static'}}>
                 <h2 className='mb-3' style={{fontWeight:'lighter'}} >نواف سعود السبيعي</h2>
                 <p className='Poppins mb-3 mt-2' style={{color: '#3d4460',fontWeight:'bold'}}>مهندس برمجيات, مطور واجهات أمامية</p>
                <p> <a href='https://www.linkedin.com/in/nawafsubaie/' className='p-2 about-icon'><BsLinkedin style={{height:'24px',width:'24px'}}/></a> 
                    <a href='https://twitter.com/Nawafsuu' className='p-2 about-icon'><BsTwitter style={{height:'24px',width:'24px'}}/></a>
                </p>
                    </Carousel.Caption>

                </Carousel.Item>
               
            </Carousel>
            <h1  style={{marginTop:'105px',fontWeight:'lighter',fontSize:'3.5em',color: '#3d4460',textAlign:'center'}}>رؤيتنا</h1>
            <p className='mb-3' style={{textAlign:'center',marginTop:'50px',fontSize:'1.25rem'}}>تتمثل رؤيتنا في جعل نبتة منصة زراعية كبيرة يمكنها جمع البيانات من المزارعين ومساعدتهم على اكتشاف أمراض محاصيلهم أو حتى رفع مستوى الوعي بمرض جديد ظهر في جميع أنحاء المملكة العربية السعودية. نخطط لجمع المزيد من البيانات حول المزيد من الأمراض وإضافتها إلى نموذج التعلم الآلي الخاص بنا لجعله أكثر شمولاً لجميع النباتات. لا يدعم نموذجنا حاليًا جميع النباتات ، حيث إننا نفتقر إلى البيانات (الصور) الخاصة بهم.</p>

        </Container>
        <br />
        <Footer />
        
        </>
    );
}

export default About;