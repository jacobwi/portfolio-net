import React, { Component } from 'react';
import styled from 'styled-components';
import hero from '../../assets/section-1.png';

const Hero = styled.div`

    padding: 100px 40px;
    animation: fadein 1s ease-in;
    @keyframes fadein {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }

    display: grid;
    grid-template-columns: 1fr auto;
    & img {
        box-shadow: -17px 13px 41px rgba(13,78,158,0.6);
        width: 22%;
        min-width: 260px;
    }
`
export default class Home extends Component {
    render() {
        return (
        <Hero>
            <img src={hero      } alt="ih"/>
        </Hero>
        )
    }
}
