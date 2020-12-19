(()=>{

    const canvas = document.getElementById('painting'); 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context =canvas.getContext('2d'); //เพื่อทำการใช้ canvas context แบบ 2d 

    let previousPoint={x:0,y:0}; //ประกาศตัวแปร previous อยู่ในตำแหน่ง x=0 y=0

    //function หาค่า opacity 
    function getDistance(previousPoint,currentPoint){
        return Math.sqrt((previousPoint.x-currentPoint.x) **2 + (previousPoint.y-currentPoint.y)**2 );
    }

    function onMouseMove({pageX,pageY}){
        const currentPoint={ x:pageX , y:pageY };

        const distance = getDistance(previousPoint,currentPoint);//เรียกใช้ฟั่งชัน getDistance 
        const opacity = Math.min(0.5,1/distance); //หาopacity โดยค่าจะเริ่มตั้ง0.5-1 ถ้าหากลากเมาส์เร็วจะมีค่าopacityน้อย แต่ไม่น้อยกว่า0.5

        context.beginPath();
        
        context.lineCap = 'round'; //กำหนดรูปแบบของเส้น
        context.lineJoin = 'round'; //เชื่อมเส้น เพื่อให้เส้นต่อกัน
        context.lineWidth = Math.random()/distance*40;
        

        context.strokeStyle = `rgba(222,10,109,${opacity})`; //กำหนดสีของเส้น

        context.moveTo( previousPoint.x , previousPoint.y ); //เลื่อนดินสอไปยังตำแหน่งที่ต้องการ (จุดเริ่มต้น)
        context.lineTo( currentPoint.x , currentPoint.y ); //ลากเส้นไปถึงตำแหน่ง (จุดสุดท้ายที่ยกมือ)

        context.stroke();
        context.closePath();

        previousPoint = currentPoint;
    }
    //กำหนดเริ่มต้นจากตำแหน่งเมาส์ล่าสุด
    function onMouseEnter( { pageX , pageY } ){
        previousPoint.x = pageX;
        previousPoint.y = pageY;
    }
    function run(){
        canvas.addEventListener('mousemove',onMouseMove);
        canvas.addEventListener('mouseenter',onMouseEnter);
    }

    run();
})();