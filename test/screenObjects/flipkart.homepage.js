import { $ } from '@wdio/globals'

// import {expect} from 'chai';

class Homepage{

    get homepageIcon(){
        return $('//android.view.ViewGroup[@content-desc="Account"]');
        }
}
export default new Homepage();