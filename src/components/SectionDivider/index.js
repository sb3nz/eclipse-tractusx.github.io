import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './styles.module.scss';

/**
 * Section Divider Component
 * A full-width divider that separates page sections with a title and arrow
 * 
 * @param {Object} props
 * @param {string} props.title - The text to display in the divider
 * @param {string} [props.icon] - Optional Material-UI icon component
 * @param {string} [props.backgroundColor] - Optional custom background color
 * @param {string} [props.color] - Optional custom text/icon color
 * @param {boolean} [props.disableAnimation] - Optional flag to disable arrow animation
 */
const SectionDivider = ({ title, icon: Icon, backgroundColor, color, disableAnimation = false }) => {
  return (
    <div 
      className={styles.sectionDivider}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {Icon && <Icon className={styles.icon} style={color ? { color } : undefined} />}
          <h3 className={styles.title} style={color ? { color } : undefined}>{title}</h3>
        </div>
        <KeyboardArrowDownIcon 
          className={`${styles.arrow} ${disableAnimation ? styles.noAnimation : ''}`} 
          style={color ? { color } : undefined} 
        />
      </div>
    </div>
  );
};

export default SectionDivider;
