import Concert from '../components/concert'

export default function Events() {
    return (
      <>
        <div className="grid gap-y-[24px] mx-auto w-11/12">
            <div className="flex"></div>
            <h1 class="text-[28px] font-[600]">
                Студенческие объединения
            </h1>
            <div class="grid gap-y-[8px]">
                <Concert concert_img="/img/tolpa.png" concert_date="6.09.2024" concert_name="Сила первых" concert_peoples="763" concert_redirect="event_active.html"/>
                <Concert concert_img="/img/dabro.png" concert_date="6.09.2024" concert_name="Сила первых" concert_peoples="215" concert_redirect="event_active.html"/>
                <Concert concert_img="/img/peak.png" concert_date="6.09.2024" concert_name="Сила первых" concert_peoples="652" concert_redirect="event_active.html"/>
                <Concert concert_img="/img/tolpa.png" concert_date="6.09.2024" concert_name="Сила первых" concert_peoples="120" concert_redirect="event_active.html"/>
            </div>
        </div>
      </>
    );
  }