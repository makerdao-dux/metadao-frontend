import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import config from "../../config";

export function Header() {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header">
          <div className="left">
            <h1>
              <Link href="/" title="Home page">
                <div style={{ marginLeft: "5px" }}>
                  <Image src={config.logo} alt="logo" width={35} height={35} />
                </div>
              </Link>
            </h1>
          </div>
          <div className="right">
            <div className="login-box">
              <ConnectButton
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-wrapper {
            text-transform: uppercase;
          }

          .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            flex-wrap: wrap;
            background: var(--black-background);
            padding: 5px;
          }

          .links {
            display: flex;
            justify-content: space-between;
            max-width: 800px;
            margin: 0 auto;
            font-size: 12px;
            padding-left: 15px;
            padding-right: 15px;
            flex-wrap: wrap;
            align-items: center;
          }

          .link {
            margin-left: 15px;
            margin-right: 15px;
            font-size: 12px;
          }

          a {
            color: white;
          }

          h1 {
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            font-size: 0;
          }

          h1 a {
            color: var(--text-main);
            text-decoration: none;
            display: flex;
            align-items: center;
          }

          @media only screen and (max-width: 600px) {
            h1 img {
              max-width: 100px;
            }
            .header .links {
              display: none;
            }
            .link {
              font-size: 10px;
            }

            h1 {
              font-size: 10px;
            }
          }

          .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
