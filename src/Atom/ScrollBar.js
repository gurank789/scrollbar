import React from 'react';
import styles from './ScrollBar.module.css';

function ScrollBar() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/15598315/pexels-photo-15598315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile 1" />
        <h2>Profile 1</h2>
        <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla et enim semper bibendum.</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/16576239/pexels-photo-16576239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile 2" />
        <h2>Profile 2</h2>
        <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla et enim semper bibendum.</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/11432781/pexels-photo-11432781.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile 3" />
        <h2>Profile 3</h2>
         <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla et enim semper bibendum.</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/15792248/pexels-photo-15792248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile 3" />
        <h2>Profile 4</h2>
         <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla et enim semper bibendum.</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/16578960/pexels-photo-16578960.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <h2>Profile 5</h2>
        <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla et enim semper bibendum.</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/15793813/pexels-photo-15793813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile 2" />
        <h2>Profile 6</h2>
        <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla et enim semper bibendum.</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      </div>
    </div>
  );
}

export default ScrollBar;