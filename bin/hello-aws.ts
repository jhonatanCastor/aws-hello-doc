#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloAwsStack } from '../lib/hello-aws-stack';

const app = new cdk.App();
new HelloAwsStack(app, 'HelloAwsStack', {
 
});