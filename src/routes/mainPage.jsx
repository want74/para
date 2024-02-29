import Post from '../components/post'
import Stories from '../components/stories'

export default function Root() {
    return (
      <>
        <div className="grid gap-y-[24px] mx-auto w-11/12">
          <div className="flex"></div>
          <div className="flex flex-row justify-between">
            <Stories 
              img="img/ppos.svg" 
              alt="ppos" 
              text="PPOS SVFU"
            />
            <Stories 
              img="img/ppos.svg" 
              alt="ppos" 
              text="PPOS SVFU"
            />
            <Stories 
              img="img/ppos_disabled.png" 
              alt="ppos" 
              text="PPOS SVFU"
            />
            <Stories 
              img="img/ppos_disabled.png" 
              alt="ppos" 
              text="PPOS SVFU"
            />
          </div>
          <input type="tel" className="w-full h-[56px] border-[1px] border-[#EEEEEE] rounded-[20px] text-[16px] font-[400] text-[#A1A9B8] bg-gray" placeholder="Добавить запись..."/>
          <div className="grid gap-y-[8px]">
            <Post 
              img="img/peoples.png" 
              author_avatar="img/ppos.svg" 
              header="Набор в ППОС СВФУ" 
              text="Всем привет! На связи первичная профсоюзная организация студентов СВФУ. Мы рады сообщить вам об открытии заявок на вступление в наш коллектив. Ждем ваших заявок в наши ряды!"  
              author="ППОС СВФУ"
            />
            <Post
              img="img/peoples.png" 
              author_avatar="img/ppos.svg" 
              header="Набор в ППОС СВФУ" 
              text="Всем привет! На связи первичная профсоюзная организация студентов СВФУ. Мы рады сообщить вам об открытии заявок на вступление в наш коллектив. Ждем ваших заявок в наши ряды!"  
              author="ППОС СВФУ"
            />
            <Post
              img="img/peoples.png" 
              author_avatar="img/ppos.svg" 
              header="Набор в ППОС СВФУ" 
              text="Всем привет! На связи первичная профсоюзная организация студентов СВФУ. Мы рады сообщить вам об открытии заявок на вступление в наш коллектив. Ждем ваших заявок в наши ряды!"  
              author="ППОС СВФУ"
            />
          </div>
        </div>
      </>
    );
  }