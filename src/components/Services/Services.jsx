import styles from './Services.module.css'
export default function Services({
  imgSrc,
  imgAlt,
  title,
  text,
  children,
  containerClass, 
  imageClass,     
  titleClass,
  textClass,       
})
{
  return (
   <div className={`${styles["card-container"]} ${containerClass}`}>
     <div className={styles["card-bg"]}>
       <img
         src={imgSrc}
         alt={imgAlt}
         className={`${styles.imagenes} ${imageClass}`} 
       />
     </div>

     <div className={styles["info-container"]}>
       <h2 className={`${styles["title-content"]} ${titleClass}`}> 
         {title}
       </h2>
       <p className={`${styles["text-content"]} ${textClass}`}> 
         {text}
       </p>
     </div>

     {children && <div>{children}</div>}

   </div>
 );
}
