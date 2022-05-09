import React from "react";

function PostItems(props){
  const [name, setName] = React.useState("heart-outline");

  function like(click){
    if(click === "post"){
      setName("heart");
    }
  }

function dislike(takeoff){
  if(takeoff === "heart"){
    setName("heart-outline");
  }
}

  return (
    <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.image}/>
                {props.title}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div onClick={() =>like("post")} class="conteudo">
              <img src={props.image2}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon onClick={() => dislike("heart")} name={name}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.image3}/>
                <div class="texto">
                  Curtido por <strong>{props.curtidor}</strong> e <strong>outras {props.totalcurtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
  )
}

export default function Posts(){
const itensPost = [
  {
    image:"assets/img/meowed.svg",
    title:"meowed",
    image2:"assets/img/gato-telefone.svg",
    image3:"assets/img/respondeai.svg",
    curtidor:"respondeai",
    totalcurtidas:"101.523"
  },
  {
    image:"assets/img/barked.svg",
    title:"barked",
    image2:"assets/img/dog.svg",
    image3:"assets/img/adorable_animals.svg",
    curtidor:"adorable_animals",
    totalcurtidas:"99.159"
  }
];


    return (
        <div class="posts">
          {itensPost.map(item =><PostItems image={item.image} title={item.title} image2={item.image2} image3={item.image3} curtidor={item.curtidor} totalcurtidas={item.totalcurtidas}/> )}
        </div>
    );
}