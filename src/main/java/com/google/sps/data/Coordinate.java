// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

/** A coordinate. */
public final class Coordinate {

  private final Double x;
  private final Double y;
  private final String label;

  /** Creates a new coordinate with a label
    */
  public Coordinate(Double x, Double y, String label) {
    this.x = x;
    this.y = y;
    this.label = label;
  }

  /** Returns the x coordinate of this point.
    */
  public Double getX() {
    return x;
  }
  
  /** Returns the y coordinate of this point.
    */
  public Double getY() {
    return y;
  }

  /** Returns the label of this point.
    */
  public String getLabel() {
    return label;
  }
}