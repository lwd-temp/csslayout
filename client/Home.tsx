import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

import CoverCard from './components/CoverCard';
import Pattern from './constants/Pattern';
import useDocumentTitle from './hooks/useDocumentTitle';
import Layout from './layouts/Layout';

const Home = () => {
    useDocumentTitle('CSS Layout');

    return (
        <Layout>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    borderBottomColor: 'transparent',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    marginTop: '64px',
                }}
            >
                <div style={{ position: 'relative' }}>
                    <h1
                        style={{
                            backgroundColor: '#00449E',
                            borderRadius: '9999px',
                            color: '#FFF',
                            fontSize: '36px',
                            fontWeight: 600,
                            left: '50%',
                            lineHeight: 1.5,
                            margin: 0,
                            padding: '0 16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        CSS Layout
                    </h1>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 300,
                            lineHeight: 1.5,
                            margin: 0,
                            padding: '64px 0px 32px 0',
                            textAlign: 'center',
                        }}
                    >
                        a collection of popular layouts and patterns made with CSS
                    </h2>

                    <div
                        className="hljs"
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            fontSize: '16px',
                            justifyContent: 'center',
                            lineHeight: 1.5,
                        }}
                    >
                        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, width: '300px' }}>
                            <li><span className="hljs-selector-class">.awesome</span> &#123;</li>
                            <ul style={{ listStyleType: 'none', margin: 0, padding: '0 32px' }}>
                                <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="hljs-attribute">zero-dependencies:</div>
                                    <div>🎉;</div>
                                </li>
                                <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="hljs-attribute">no-frameworks:</div>
                                    <div>🎉;</div>
                                </li>
                                <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="hljs-attribute">no-css-hacks:</div>
                                    <div>🎉;</div>
                                </li>
                                <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="hljs-attribute">real-use-cases:</div>
                                    <div>🎉;</div>
                                </li>
                                <li style={{ alignItems: 'center', display: 'flex' }}>
                                    <div className="hljs-attribute">good-practices:</div>
                                    <div
                                        style={{
                                            backgroundColor: '#00449E',
                                            borderRadius: '9999px',
                                            color: '#FFF',
                                            fontSize: '14px',
                                            marginLeft: 'auto',
                                            padding: '0 8px',
                                        }}
                                    >
                                        soon
                                    </div>
                                    ;
                                </li>
                                <li style={{ alignItems: 'center', display: 'flex' }}>
                                    <div className="hljs-attribute">accessibility:</div>
                                    <div
                                        style={{
                                            backgroundColor: '#00449E',
                                            borderRadius: '9999px',
                                            color: '#FFF',
                                            fontSize: '14px',
                                            marginLeft: 'auto',
                                            padding: '0 8px',
                                        }}
                                    >
                                        soon
                                    </div>
                                    ;
                                </li>
                            </ul>
                            <li>&#125;</li>
                        </ul>
                    </div>
                </div>

                <section style={{ height: '900px', overflow: 'hidden', paddingBottom: '32px', position: 'relative' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                            zIndex: 9999,
                        }}
                    >
                        <div
                            style={{
                                fontSize: '64px',
                                fontWeight: 600,
                                marginBottom: '16px',
                            }}
                        >
                            50+ patterns
                        </div>
                        <Link
                            to="/explore"
                            style={{
                                backgroundColor: '#00449e',
                                borderRadius: '4px',
                                color: '#FFF',
                                fontSize: '24px',
                                padding: '12px 16px',
                                textDecoration: 'none',
                            }}
                        >
                                Explore the collection
                        </Link>
                    </div>
                    <div
                        className="home-cards"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            opacity: '0.4',
                            padding: '32px 16px',
                        }}
                    >
                        <CoverCard pattern={Pattern.HolyGrail} />
                        <CoverCard pattern={Pattern.Sidebar} />
                        <CoverCard pattern={Pattern.SplitScreen} />
                        <CoverCard pattern={Pattern.StickyFooter} />
                        <CoverCard pattern={Pattern.StickyHeader} />
                        <CoverCard pattern={Pattern.Badge} />
                        <CoverCard pattern={Pattern.Breadcrumb} />
                        <CoverCard pattern={Pattern.ButtonWithIcon} />
                        <CoverCard pattern={Pattern.Card} />
                        <CoverCard pattern={Pattern.Centering} />
                        <CoverCard pattern={Pattern.DockedAtCorner} />
                        <CoverCard pattern={Pattern.DotLeader} />
                        <CoverCard pattern={Pattern.DotNavigation} />
                        <CoverCard pattern={Pattern.FeatureList} />
                        <CoverCard pattern={Pattern.FixedAtCorner} />
                        <CoverCard pattern={Pattern.InputAddOn} />
                        <CoverCard pattern={Pattern.MediaObject} />
                        <CoverCard pattern={Pattern.Menu} />
                        <CoverCard pattern={Pattern.Modal} />
                        <CoverCard pattern={Pattern.Notification} />
                        <CoverCard pattern={Pattern.Pagination} />
                        <CoverCard pattern={Pattern.PreviousNextButtons} />
                        <CoverCard pattern={Pattern.PricingTable} />
                        <CoverCard pattern={Pattern.PropertyList} />
                        <CoverCard pattern={Pattern.ProgressBar} />
                        <CoverCard pattern={Pattern.QuestionsAndAnswers} />
                        <CoverCard pattern={Pattern.RadioSwitch} />
                        <CoverCard pattern={Pattern.Rating} />
                        <CoverCard pattern={Pattern.SameHeightColumns} />
                        <CoverCard pattern={Pattern.SearchBox} />
                        <CoverCard pattern={Pattern.Separator} />
                        <CoverCard pattern={Pattern.SimpleGrid} />
                        <CoverCard pattern={Pattern.Slider} />
                        <CoverCard pattern={Pattern.SpinButton} />
                        <CoverCard pattern={Pattern.SplitNavigation} />
                        <CoverCard pattern={Pattern.StepperInput} />
                        <CoverCard pattern={Pattern.Switch} />
                        <CoverCard pattern={Pattern.Tab} />
                        <CoverCard pattern={Pattern.TogglePasswordVisibility} />
                        <CoverCard pattern={Pattern.Wizard} />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
