import React from 'react';
import PropTypes from 'prop-types';
import GroupedMessages from './GroupedMessages';
import './Test.css';
import Album from './Album';

class Test extends React.Component {

    constructor(props) {
        super(props);

        const messages = [
            [{
                '@type': 'message',
                content: {
                    '@type': 'messagePhoto',
                    photo: {
                        '@type': 'photo',
                        sizes: [
                            {
                                '@type': 'photoSize',
                                width: 320,
                                height: 320
                            }
                        ]

                    }
                }
            },
            {
                '@type': 'message',
                content: {
                    '@type': 'messagePhoto',
                    photo: {
                        '@type': 'photo',
                        sizes: [
                            {
                                '@type': 'photoSize',
                                width: 640,
                                height: 320
                            }
                        ]

                    }
                }
            }],
            [{
                '@type': 'message',
                content: {
                    '@type': 'messagePhoto',
                    photo: {
                        '@type': 'photo',
                        sizes: [
                            {
                                '@type': 'photoSize',
                                width: 320,
                                height: 640
                            }
                        ]

                    }
                }
            },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                }],
            [{
                '@type': 'message',
                content: {
                    '@type': 'messagePhoto',
                    photo: {
                        '@type': 'photo',
                        sizes: [
                            {
                                '@type': 'photoSize',
                                width: 640,
                                height: 320
                            }
                        ]

                    }
                }
            },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 320
                                }
                            ]

                        }
                    }
                }],
                [{
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 320
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 320
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 320
                                }
                            ]

                        }
                    }
                }],
                [{
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                }],
                [{
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                }],
                [{
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 640,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                },
                {
                    '@type': 'message',
                    content: {
                        '@type': 'messagePhoto',
                        photo: {
                            '@type': 'photo',
                            sizes: [
                                {
                                    '@type': 'photoSize',
                                    width: 320,
                                    height: 640
                                }
                            ]

                        }
                    }
                }]
        ];

        const desiredWidth = 320;

        this.state = {
            messages,
            desiredWidth
        };
    }

    render() {
        const { messages, desiredWidth } = this.state;

        const albums = messages.map((x, i) => <Album key={i} messages={x} displaySize={desiredWidth}/>);

        return (
            <>
                {albums}
            </>
        );
    }

}

Test.propTypes = {};

export default Test;