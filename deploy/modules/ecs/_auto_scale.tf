resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  count               = var.enable_autoScaling ? 1 : 0
  alarm_name          = "${var.app_name_prefix}-cpu-high-${var.environment}"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = var.max_cpu_evaluation_period
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = 60
  statistic           = "Maximum"
  threshold           = var.max_cpu_threshold
  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
    ServiceName = aws_ecs_service.main.name
  }
  alarm_actions = [aws_appautoscaling_policy.scale_up_policy[count.index].arn]

  tags = merge({ Name = "${var.app_name_prefix}-cpu-high-${var.environment}" }, var.tags)

}

resource "aws_cloudwatch_metric_alarm" "cpu_low" {
  count               = var.enable_autoScaling ? 1 : 0
  alarm_name          = "${var.app_name_prefix}-cpu-low-${var.environment}"
  comparison_operator = "LessThanOrEqualToThreshold"
  evaluation_periods  = var.min_cpu_evaluation_period
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = 60
  statistic           = "Average"
  threshold           = var.min_cpu_threshold
  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
    ServiceName = aws_ecs_service.main.name
  }
  alarm_actions = [aws_appautoscaling_policy.scale_down_policy[count.index].arn]

  tags = merge({ Name = "${var.app_name_prefix}-cpu-low-${var.environment}" }, var.tags)

}

resource "aws_appautoscaling_policy" "scale_up_policy" {
  count              = var.enable_autoScaling ? 1 : 0
  name               = "${var.app_name_prefix}-scale-up-policy-${var.environment}"
  service_namespace  = aws_appautoscaling_target.scale_target[count.index].service_namespace
  resource_id        = aws_appautoscaling_target.scale_target[count.index].resource_id
  scalable_dimension = aws_appautoscaling_target.scale_target[count.index].scalable_dimension
  step_scaling_policy_configuration {
    adjustment_type         = "ChangeInCapacity"
    cooldown                = 60
    metric_aggregation_type = "Maximum"
    step_adjustment {
      metric_interval_lower_bound = 0
      scaling_adjustment          = 1
    }
  }
}

resource "aws_appautoscaling_policy" "scale_down_policy" {
  count              = var.enable_autoScaling ? 1 : 0
  name               = "${var.app_name_prefix}-scale-down-policy-${var.environment}"
  service_namespace  = aws_appautoscaling_target.scale_target[count.index].service_namespace
  resource_id        = aws_appautoscaling_target.scale_target[count.index].resource_id
  scalable_dimension = aws_appautoscaling_target.scale_target[count.index].scalable_dimension
  step_scaling_policy_configuration {
    adjustment_type         = "ChangeInCapacity"
    cooldown                = 60
    metric_aggregation_type = "Maximum"
    step_adjustment {
      metric_interval_upper_bound = 0
      scaling_adjustment          = -1
    }
  }
}

resource "aws_appautoscaling_target" "scale_target" {
  count              = var.enable_autoScaling ? 1 : 0
  service_namespace  = "ecs"
  resource_id        = "service/${var.ecs_cluster_name}/${var.ecs_service_name}"
  scalable_dimension = "ecs:service:DesiredCount"
  min_capacity       = var.scale_target_min_capacity
  max_capacity       = var.scale_target_max_capacity
}