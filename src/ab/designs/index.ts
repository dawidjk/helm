import {registerVariant} from '../variants';
import {AkariHome, JapandiHome} from './VariantHomes';

registerVariant({id: 'japandi', label: 'Japandi', description: 'Quiet luxury, tactile materials, and deliberate space.', overrides: {home: JapandiHome}});
registerVariant({id: 'akari', label: 'Akari', description: 'Warm, luminous craft with a cinematic sense of calm.', overrides: {home: AkariHome}});
