import Button from "../componets/Button";
import { GoBell, GoCloudDownload, GoDeviceMobile } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoDeviceMobile />
          Eeyore!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
