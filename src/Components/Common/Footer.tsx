import { FooterLinkArray } from '../../Util/interface';
import { FooterWrap, Quick } from './Common.style';

const Footer = () => {
  const links: FooterLinkArray[] = [
    {
      name: 'Github',
      href: 'https://github.com/yeojin15',
    },
    {
      name: 'Repository',
      href: 'https://github.com/yeojin15/ts-disney-plus',
    },
    {
      name: 'Resume',
      href: 'https://yeojin.oopy.io/',
    },
  ];
  return (
    <FooterWrap>
      <Quick>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} target='_blank' rel='noreferrer'>
              {link.name}
            </a>
          </li>
        ))}
      </Quick>
    </FooterWrap>
  );
};

export default Footer;
