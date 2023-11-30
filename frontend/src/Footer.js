import React from 'react';
import './Footer.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitch from './twitch.png';

export default function Footer() {
  return (
    <footer className="footer">
        <div  style={{ display: 'flex', alignItems: 'center', margin: '70px'}}>
            <a href="https://www.instagram.com/lsacbucuresti/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><img src={instagram} className="logo" /></a>
            <a href="https://www.facebook.com/LsacBucuresti"><img src={facebook} className="logo" /></a>
            <a href="https://www.twitch.tv/lsac_bucuresti"><img src={twitch} className="logo1" /></a>
        </div>
    </footer>
  );
}
