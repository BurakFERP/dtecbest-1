import React from 'react';
import {dsnCN} from "../../hooks/helper";
import ButtonWallet from '../button/button-wallet/ButtonWallet';

function Copyright({className, ...restProps}) {
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>© {new Date().getFullYear()} Droow Digital Agency</p>
                <div className="copyright-text over-hidden">
                    Designed by
                    <a href="0#" target="_blank">
                        BH
                    </a>
                </div>
                <div><ButtonWallet/></div>
            </div>
        </div>
    );
}

export default Copyright;