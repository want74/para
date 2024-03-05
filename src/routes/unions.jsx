import Union from '../components/union'

export default function Unions() {
    return (
      <>
        <div className="grid gap-y-[24px] mx-auto w-11/12">
            <div className="flex"></div>
            <h1 className="text-[28px] font-[600]">
                Студенческие объединения
            </h1>
            <div className="grid gap-y-[8px]">
                <Union union_avatar="img/imko.svg" union_name="ИМКО СВФУ" union_desc="Комиссия по имиджевой и корпоративной политике" union_subs="900 подписчиков"/>
                <Union union_avatar="img/imko.svg" union_name="ИМКО СВФУ" union_desc="Комиссия по имиджевой и корпоративной политике" union_subs="900 подписчиков"/>
                <Union union_avatar="img/imko.svg" union_name="ИМКО СВФУ" union_desc="Комиссия по имиджевой и корпоративной политике" union_subs="900 подписчиков"/>
                <Union union_avatar="img/imko.svg" union_name="ИМКО СВФУ" union_desc="Комиссия по имиджевой и корпоративной политике" union_subs="900 подписчиков"/>
                <Union union_avatar="img/imko.svg" union_name="ИМКО СВФУ" union_desc="Комиссия по имиджевой и корпоративной политике" union_subs="900 подписчиков"/>
            </div>
        </div>
      </>
    );
  }