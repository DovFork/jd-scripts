import { Router } from 'express';
import yiYan from './routes/yiYan';
import ddXw from './routes/ddXw';
import ddFactory from './routes/ddFactory';
import jxFactory from './routes/jxFactory';
import jxStory from './routes/jxStory';
import jxFactoryTuan from './routes/jxFactoryTuan';
import shiCi from './routes/shiCi';
import jxCfd from './routes/jxCfd';
import jxCfdGroup from './routes/jxCfdGroup';
import jxNc from './routes/jxNc';
import jdZz from './routes/jdZz';
import jdZjdTuan from './routes/jdZjdTuan';
import didi from './routes/didi';
import jd818 from './routes/jd818';
import agendash from './routes/agendash';

export default () => {
	const app = Router();
	ddXw(app);
	ddFactory(app);
	jxFactory(app);
	yiYan(app);
	jxFactoryTuan(app);
	shiCi(app);
	jxCfd(app);
	jxNc(app);
	jdZz(app);
	jxStory(app);
	jxCfdGroup(app);
	jdZjdTuan(app);
	agendash(app);
	didi(app);
	jd818(app);
	return app
}
