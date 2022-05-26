import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fast and easy to use',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        Easy integration in your react project. Just install the package
        and use it. No contexts. No wrappers. Only observers.
      </>
    ),
  },
  {
    title: 'Distributed state',
    Svg: require('@site/static/img/decentralized.svg').default,
    description: (
      <>
        Application state is decentralized between components, making
        it accessible in every part of application.
      </>
    ),
  },
  {
    title: 'State sync',
    Svg: require('@site/static/img/sync.svg').default,
    description: (
      <>
        Components will share a local copy of the state and the callback to modify it.
        Every update will send and event to components subscribed to same state.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
