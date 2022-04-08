import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import Auth from '@aws-amplify/auth';

Amplify.configure(awsmobile);
Auth.configure(awsmobile);
