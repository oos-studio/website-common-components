import React from 'react'
import { MegaMenu } from './components'

export const data = {
    "navigation": {
        "brand": {
            url: '#/',
            image: {
                title: 'image title',
                src: "https://via.placeholder.com/50/EEEEEE/333333?Text=Brand"
            }
        },
        "items": [
            {
                "text": "Link",
                "url": "#/1",
                "type": "link"
            },
            {
                "text": "Link",
                "url": "#/2",
                "type": "link"
            },
            {
                "text": "Link",
                "url": "#/3",
                "type": "link"
            },
            {
                "text": "Dropdown",
                "url": "#",
                "type": "dropdown",
                aside: {
                    header: "I'm New",
                    text: 'If you are searching for a home church or just...',
                    brand: {
                        url: '#/',
                        image: {
                            title: 'image title',
                            src: "https://via.placeholder.com/50/EEEEEE/333333?Text=Brand"
                        }
                    }
                },
                render: () => <MegaMenu columns={[
                    {
                        heading: 'Heading 1',
                        type: 'links',
                        links: [
                            {
                                title: 'Link A',
                                url: '#/A'
                            },
                            {
                                title: "Link B",
                                url: "#/B"
                            },
                            {
                                title: "Link C",
                                url: "#/C"
                            },
                            {
                                title: "Link D",
                                url: "#/D"
                            }
                        ]
                    },
                    {
                        heading: 'Heading 2',
                        type: 'links',
                        links: [
                            {
                                title: 'Link A',
                                url: '#/A'
                            },
                            {
                                title: "Link B",
                                url: "#/B"
                            },
                            {
                                title: "Link C",
                                url: "#/C"
                            },
                            {
                                title: "Link D",
                                url: "#/D"
                            }
                        ]
                    }
                ]}/>
            },
            {
                "text": "Dropdown",
                "url": "#",
                "type": "dropdown",
                render: () => <MegaMenu columns={[
                    {
                        heading: 'Heading 1',
                        type: 'links',
                        links: [
                            {
                                title: 'Link A',
                                url: '#/A'
                            },
                            {
                                title: "Link B",
                                url: "#/B"
                            },
                            {
                                title: "Link C",
                                url: "#/C"
                            },
                            {
                                title: "Link D",
                                url: "#/D"
                            }
                        ]
                    },
                    {
                        heading: 'Image Heading',
                        type: 'image',
                        src: 'https://via.placeholder.com/150/EEEEEE/333333?Text=Brand',
                        title: 'Image',
                    }
                ]}/>
            }
        ],
        styles: {
        }
    }
}
