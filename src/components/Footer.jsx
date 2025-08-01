import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/Footer.module.scss';

const Footer = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles['navbar-right']}>
          <ul>
            <li>
              <button
                /* href="/recycling" */ onClick={() => {
                  router.back();
                }}
                className={styles.footerLink}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={50} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Atrás
              </button>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-left']}>
          <ul>
            {/* 					<li>
						<button 
						href="/recycling" 
						onClick={() => { router.back(); }}  className={styles.footerLink}>
								Atras
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" width={50} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  					<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              					</svg>
							</button>		
					</li> */}
            <li>
              {/* <div id="widgets" className={styles.widgets}></div>
                        <Script src='https://www.hazvaca.com/project/widgets_code/s/red/3408'
                                type='text/javascript'></Script> */}
              <p className={styles.textoFooter}>
                Importamos productos y tenemos la mision de implementar la economia circular en el Ecuador.
              </p>
            </li>
            {/* 					<li>
						<Link href="/recycling">Reciclar</Link>
					</li>
					<li>
						<Link href="/store">Tienda</Link>
					</li>
					<li>
						<Link href="/contact">Contactanos</Link>
					</li>
					<li>
						<Link href="/">Blog</Link>
					</li> */}
          </ul>
        </div>
        <div className={styles['navbar-left']}>
          <ul className={styles.footerRigthList}>
            <li>
              <Link href="/signInCustomer" className={styles.footerLink}>
                Registrarse
              </Link>
            </li>
            <li>
              <button /* href="/recycling" */
                onClick={() => {
                  /* 
								console.log('i can see your current path is this one: ', currentPath);  */
                  currentPath == '/home'
                    ? router.push('/store')
                    : currentPath == '/store'
                    ? router.push('/checkout')
                    : currentPath == '/checkout'
                    ? router.push('/mi_cuenta/orders') /* router.push('/mi_cuenta/cliente') */
                    : router.push('/mi_cuenta/orders');
                }}
                className={styles.footerLink}
              >
                Adelante
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={50} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <footer className="max-w-5xl mx-auto">
        <nav className="flex items-center justify-center pb-2 bg-[#333333] rounded-[0_0_1rem_1rem]">
          <p className="text-gray-100">
            <a className="font-bold" href="https://circular-merchant.aynimar.com/">
              Registra tu negocio
            </a>
          </p>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
