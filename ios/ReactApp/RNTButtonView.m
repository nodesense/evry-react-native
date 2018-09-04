//
//  RNTButtonView.m
//  ReactApp
//
//  Created by Gopalakrishnan Subramani on 04/09/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>




//
//  RNTMapManager.m
//  ReactApp
//
//  Created by Gopalakrishnan Subramani on 04/09/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

// RNTMapManager.m
#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RNTButtonViewManager : RCTViewManager
@end

@implementation RNTButtonViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  
  
  UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
  
//  [button addTarget:self
//             action:@selector(aMethod:)
//   forControlEvents:UIControlEventTouchUpInside];
  
  [button setTitle:@"Show View" forState:UIControlStateNormal];
  
  button.frame = CGRectMake(80.0, 210.0, 160.0, 40.0);
  //[view addSubview:button];
  return [ button init];

}



@end

