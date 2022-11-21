import Link from "next/link";
import config from "../../config";

export function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="link">
          <Link href="/about">About</Link>
        </div>
      </div>
      <div style={{ padding: "30px", textAlign: "center" }}>
        2022 - {config.name}
      </div>
      <style jsx>
        {`
          .footer {
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            max-width: 1500px;
            margin: 0 auto;
            margin-top: 30px;
          }

          .footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            color: white;
            text-transform: uppercase;
            text-decoration: underline;
          }

          .link {
            padding: 30px;
          }
        `}
      </style>
    </div>
  );
}
