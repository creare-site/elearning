import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
    title: string
    Svg: React.ComponentType<React.ComponentProps<'svg'>>
    description: JSX.Element
}

const FeatureList: FeatureItem[] = [
    {
        title: 'Continut Gratuit',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Tot continutul poate fi accesat gratuit de catre elevi si profesori fara a avea un cont.
            </>
        ),
    },
    {
        title: 'Profesori si Elevi',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Acest proiect se doreste a fi un spatiu in care profesorii si elevii pot interationa liber.
            </>
        ),
    },
    {
        title: 'Blog',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Articole care dezbat <a href="https://www.blog.invat.eu">teme de actualitate din sistemul educational</a> din Romania. 
            </>
        ),
    },
]

function Feature({ title, Svg, description }: FeatureItem) {
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
    )
}

export default function HomepageFeatures(): JSX.Element {
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
    )
}
