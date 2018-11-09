import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@fdmg/fd-buttons';
import Input, { Patterns } from '@fdmg/fd-inputs';
import Panel from '@fdmg/fd-panels';
import { renderIn } from './utils/domdom';
import styled from 'styled-components';

const StyledPanel = styled(Panel)`
    .fd-input {
        margin-bottom: 1rem;
    }
`;

const StyledAsidePanel = styled(StyledPanel)`
    .fd-input {
        width: 100%;
    }
`;

ReactDOM.render(
    (
        <StyledPanel>
            <p>Panel, input, button</p>
            <form method="GET">
                <div>
                    <Input id="main-input-1" className="fd-input" required={true} type="email" label="E-mail" pattern={Patterns.EMAIL}/>
                </div>
                <div>
                    <Input id="main-input-2" className="fd-input" required={true} type="tel" minLength={10} maxLength={10} label="Mobile" pattern={Patterns.MOBILE}/>
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </StyledPanel>
    ), renderIn('main')
);

ReactDOM.render(
    (
        <StyledPanel boxShadow={true}>
            <p>Panel boxShadow, input, button primary</p>
            <form method="GET">
                <div>
                    <Input id="main-input-3" className="fd-input" required={true} type="email" label="E-mail" pattern={Patterns.EMAIL}/>
                </div>
                <div>
                    <Input id="main-input-4" className="fd-input" required={true} type="tel" minLength={10} maxLength={10} label="Mobile" pattern={Patterns.MOBILE}/>
                </div>
                <div>
                    <Button type="submit" layout="primary">Submit</Button>
                </div>
            </form>
        </StyledPanel>
    ), renderIn('main')
);

ReactDOM.render(
    (
        <StyledPanel>
            <p>Panel, input, button secondary</p>
            <form method="GET">
                <div>
                    <Input id="main-input-5" className="fd-input" required={true} type="email" label="E-mail" pattern={Patterns.EMAIL}/>
                </div>
                <div>
                    <Input id="main-input-6" className="fd-input" required={true} type="tel" minLength={10} maxLength={10} label="Mobile" pattern={Patterns.MOBILE}/>
                </div>
                <div>
                    <Button type="submit" layout="secondary">Submit</Button>
                </div>
            </form>
        </StyledPanel>
    ), renderIn('main')
);

ReactDOM.render(
    (
        <StyledAsidePanel boxShadow={true}>
            <p>Panel boxShadow, input fullWidth, button fullWidth</p>
            <form method="GET">
                <div>
                    <Input id="aside-input-1" className="fd-input" required={true} type="email" label="E-mail" pattern={Patterns.EMAIL}/>
                </div>
                <div>
                    <Input id="aside-input-2" className="fd-input" required={true} type="tel" minLength={10} maxLength={10} label="Mobile" pattern={Patterns.MOBILE}/>
                </div>
                <div>
                    <Button type="submit" fullWidth={true}>Submit</Button>
                </div>
            </form>
        </StyledAsidePanel>
    ), renderIn('aside')
);

ReactDOM.render(
    (
        <StyledAsidePanel>
            <p>Panel, input fullWidth, button primary fullWidth</p>
            <form method="GET">
                <div>
                    <Input id="aside-input-3" className="fd-input" required={true} type="email" label="E-mail" pattern={Patterns.EMAIL}/>
                </div>
                <div>
                    <Input id="aside-input-4" className="fd-input" required={true} type="tel" minLength={10} maxLength={10} label="Mobile" pattern={Patterns.MOBILE}/>
                </div>
                <div>
                    <Button type="submit" layout="primary" fullWidth={true}>Submit</Button>
                </div>
            </form>
        </StyledAsidePanel>
    ), renderIn('aside')
);

ReactDOM.render(
    (
        <StyledAsidePanel boxShadow={true}>
            <p>Panel boxShadow, input fullWidth, button secondary fullWidth</p>
            <form method="GET">
                <div>
                    <Input id="aside-input-5" className="fd-input" required={true} type="email" label="E-mail" pattern={Patterns.EMAIL}/>
                </div>
                <div>
                    <Input id="aside-input-6" className="fd-input" required={true} type="tel" minLength={10} maxLength={10} label="Mobile" pattern={Patterns.MOBILE}/>
                </div>
                <div>
                    <Button type="submit" layout="secondary" fullWidth={true}>Submit</Button>
                </div>
            </form>
        </StyledAsidePanel>
    ), renderIn('aside')
);
