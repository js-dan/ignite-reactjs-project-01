import { Background } from "./style";
import { igniteLogo } from "./../../assets"

export function Header() {
  return (
    <Background>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      Ignite Feed
    </Background>
  )
}
