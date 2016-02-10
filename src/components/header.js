import React, { PropTypes, Component } from 'react'
import { translate, Interpolate } from 'react-i18next/lib';
import { Link } from 'react-router'

export class Header extends Component {
  onClick(e) {
    e.preventDefault()
    this.props.logout()
  }
  render() {
    const {title, username, t } = this.props
    return (
        <header>
          <h1>{t('appName')}:{title}</h1>
          {' '}
          <p>{t('content.welcome', {value: username})}</p>
          <Link to="/">{t('home')}</Link>
          {' '}
          <a href onClick={this.onClick.bind(this)}>{t('logout')}</a>
        </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  logout: PropTypes.func.isRequired
}

// All given namespaces will be loaded.
export default translate(['common', 'header'])(Header);
