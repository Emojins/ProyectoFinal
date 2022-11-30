import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
import "./cards/tarjetas.css"
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const ImagenPrincipal = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => { 

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-10 reveal-from-bottom" data-reveal-delay="200">
              Bienvenidos a <span className="text-color-primary">Pobeat</span>
            </h1>
            </div>
          </div>
         
            <div className="card-img-top">
              <div className="overflow">
                <div className="hero-figure reveal-from-bottom illustration-element-02" data-reveal-value="10px" data-reveal-delay="800">
              <Image
                className="has-shadow"
                id="imagenPrincipal"
                src={require('./cards/imagesCards/chinardamusica.jpg')}
                 />
               </div>
            </div>
          </div>
        </div> 
    </section>
  );
}

ImagenPrincipal.propTypes = propTypes;
ImagenPrincipal.defaultProps = defaultProps;

export default ImagenPrincipal;