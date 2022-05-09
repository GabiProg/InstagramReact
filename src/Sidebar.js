function SugestionItem(props){
  return (
    <div class="sugestao">
    <div class="usuario">
      <img src={props.image}/>
      <div class="texto">
        <div class="nome">{props.name}</div>
        <div class="razao">{props.reason}</div>
      </div>
    </div>

    <div class="seguir">{props.follow}</div>
  </div>
  );
}

function UserItems(props){
  return (
          <div class="usuario">
            <img src={props.image}/>
            <div class="texto">
              <strong>{props.username}</strong>
              {props.title}
            </div>
          </div>
  );
}

export default function Sidebar(){
const SugestionsToFollow = [
  {
    image:"assets/img/bad.vibes.memes.svg",
    name:"bad.vibes.memes",
    reason:"Segue você",
    follow:"Seguir"
  },
  {
    image:"assets/img/chibirdart.svg",
    name:"chibirdart",
    reason:"Segue você",
    follow:"Seguir"
  },
  {
    image:"assets/img/razoesparaacreditar.svg",
    name:"razoesparaacreditar",
    reason:"Novo no Instagram",
    follow:"Seguir"
  },
  {
    image:"assets/img/adorable_animals.svg",
    name:"adorable_animals",
    reason:"Segue você",
    follow:"Seguir"
  },
  {
    image:"assets/img/smallcutecats.svg",
    name:"smallcutecats",
    reason:"Segue você",
    follow:"Seguir"
  }
];

    return (
        <div class="sidebar">
          <UserItems image="assets/img/catanacomics.svg" username="catanacomics" title="Catana"/>

          <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          { SugestionsToFollow.map(item =><SugestionItem image={item.image} name={item.name} reason={item.reason} follow={item.follow}/>)} 
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    );
}