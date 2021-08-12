class Singleton {
    private static instance: Singleton;
    
    private constructor(){
        // some init
    }

    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
            return Singleton.instance;
        }else{
            return  Singleton.instance;
        }
    }
}

export default Singleton;