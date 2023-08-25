import { ref, Ref } from "vue";
import IMsalConfig from '../interfaces/IMsalConfig'
class AzureService {
    private msalConfig:Ref<IMsalConfig>;
    private accessToken:Ref<string>;

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: "1dbbd56e-06cb-4dd1-b18c-51e43cebd79c",
                authority: "https://login.microsftonline.com/d16e550c-432d-4c6b-8c2f-6bf343e570e9",
            },
            cache: {
                cacheLocation: "localStorage",
            },
        });
        this.accessToken = ref('');
    }

    setAccessToken(token:string):Ref<string> {
        this.accessToken.value = token;
        return this.accessToken;
    }

    getAccessToken():Ref<string> {
        return this.accessToken;
    }

    getMsalConfig():Ref<IMsalConfig> {
        return this.msalConfig;
    }
}

export default AzureService;
