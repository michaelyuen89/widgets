import React from 'react';
import Clock from './clock';
import Tabs from './tab';

const tabs = [
    { name: 'Kyoko Sakura', content: 'https://static.zerochan.net/Sakura.Kyouko.full.923398.jpg' },
    { name: 'Sayaka Miki', content: 'https://i.pinimg.com/736x/94/57/0c/94570c94079a2b7b8aeff4eae83772e5.jpg' },
    { name: 'Madoka Kaname', content: 'https://images.goodsmile.info/cgm/images/product/20121031/3727/21105/large/5533856bb0ab14ebf7609e4768a530a1.jpg' },
    { name: 'Homura Akemi', content: 'https://i.pinimg.com/originals/2a/e0/d5/2ae0d5dedce2d55828100d9548790f95.jpg' },
    { name: 'Mami Tomoe', content: 'https://cdn.donmai.us/original/ef/6b/__tomoe_mami_and_kyubey_mahou_shoujo_madoka_magica_drawn_by_kuena__ef6b475c841c425c7293954af93df847.jpg' },
    { name: "Kaori Miyazono", content: "https://i.pinimg.com/originals/08/8b/c1/088bc135475284422c143295168a652b.png"},
    { name: "Mai Sakurajima", content: "https://www.hlj.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/z/azk51646_1.jpg"}
];

const App = (props) => {

    return (
        <>
            <Clock />
            <Tabs tabs={tabs} />
        </>
    );
};



export default App;