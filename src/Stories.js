function StoriesItem(props){
  return (
    <div class="story">
        <div class="imagem">
          <img src={props.image} />
        </div>
        <div class="usuario">
            {props.title}
        </div>
      </div>
  );
}

export default function Stories (){
  const profileNames = [ 
    {
      title:"9gag",
      image:"assets/img/9gag.svg"
    },
     {
       title:"meowed",
      image:"assets/img/meowed.svg"
      }
       ,
     {
       title:"barked",
      image:"assets/img/barked.svg"
      },
     {
       title:"nathanwpylestrangeplanet",
      image:"assets/img/nathanwpylestrangeplanet.svg"
      },
     {
       title:"wawawicomics",
      image:"assets/img/wawawicomics.svg"
      },
     {
       title:"respondeai",
      image:"assets/img/respondeai.svg"
      },
     {
       title:"filomoderna",
      image:"assets/img/filomoderna.svg"
      },
     {
       title:"memeriagourmet",
      image:"assets/img/memeriagourmet.svg"
      }
    ];

    return (
    <div class="stories">
         { profileNames.map( item => <StoriesItem title={item.title} image={item.image}/>)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>);
        }